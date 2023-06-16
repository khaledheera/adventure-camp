import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider"
import axios from "axios";
import Swal from "sweetalert2";

const ClassCard = ({ popularClass }) => {
  const { image, _id,className, students,instructor_email, instructor_name, seats, price } =
    popularClass;
    const {user}=useContext(AuthContext)
const navigation=useNavigate()

const handleSelect=()=>{
  if(!user){
    
      Swal.fire({
        position: "top",
        icon: "error",
        title: `Please Login`,
        showConfirmButton: false,
        timer: 1500,});
        
    navigation("/login")
  }
  const selectedClass={
    classId:_id,
    instructor_name:instructor_name,
    instructor_email:instructor_email,
    className:className,
    image,
    price,
    name:user?.name,
    email:user?.email,
  };
  axios.post (`https://adventure-camp-server.vercel.app/selected`,selectedClass)
  .then((data)=>{
    console.log(data.data);
    if(data.data.insertedId){
      Swal.fire({
        position: "top",
        icon: "success",
        title: `Selected`,
        showConfirmButton: false,
        timer: 1500,});
    }
    else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: `Already Selected`,
        showConfirmButton: false,
        timer: 1500,});
    } 
   
  })
}





  return (
    <div className="card lg:w-96 glass px-4 py-5 mx-auto  md:px-24 lg:px-10">
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={image}
        alt=""
      />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
        {className}
      </p>

      <p>
        <span className="font-bold">Instructor: </span>
        {instructor_name}
      </p>
     
      <p>
        <span className="font-bold">Available Seats: </span>
        {seats-students}
      </p>
      <p>
        <span className="font-bold">Price:</span>
        ${price}
      </p>

     <div className="card-action justify-center">
<button
onClick={handleSelect}
className={`px-5 py-5 btn-info ${seats-students=== 0 && "btn-disabled"}`}
>
Select
</button>
     </div>
    </div>
  );
};

export default ClassCard;
