import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

const CheckoutForm = ({ selectedClass, price }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setPaymentLoading(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "Anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
    }
    console.log(paymentIntent || error || confirmError);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        className: selectedClass.className,
        instructor_email: selectedClass.instructor_email,
        instructor_name: selectedClass.instructor_name,
        classId: selectedClass.classId,
        selectedClassId: selectedClass._id,
        image: selectedClass.image,
        status:'Paid',
        date: moment(new Date()).format("LLL"),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertResult.insertedId) {
          axiosSecure
            .patch(`/classes/${selectedClass.classId}`)
            .then((data) => {
              console.log(data.data);
            });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Done Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/dashboard/enrollClass");
      });
    }
    setPaymentLoading(false);
  };

  return (
    <div>
      <form className="w-2/3 m-8 w " onSubmit={handleSubmit}>
      <CardElement className="shadow-lg w-96 border gap-4 p-5"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'black',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
        <div className="w-1/12 mx-auto mt-5 ">
          <button
            className="px-4 py-2 btn btn-accent hover:bg-[#DDDCDC]  cursor-pointer text-base lg:text-lg font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none inline-flex items-center gap-3"
            type="submit"
            disabled={!stripe || !clientSecret | paymentLoading}
          >
            Pay
          </button>
        </div>
      </form>

      <div className="w-5/6 mx-auto pt-6 pb-20">
        {cardError && (
          <p className="text-lg text-red-600 font-medium">{cardError}</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
