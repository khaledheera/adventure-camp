import React, { useEffect } from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ClassModal = ({id,refetch}) => {
    const [axiosSecure] = useAxiosSecure();
    const {register,handleSubmit,reset}=useForm()

const closeModal=()=>{
    const modalToggle=document.getElementById(`modal-${id}`)
    if (modalToggle){
        modalToggle.checked=false
    }
}

useEffect(()=>{
    const modalToggle=document.getElementById(`modal-${id}`)
    if (modalToggle){
        modalToggle.checked=false
    }
},[id]);



    const onSubmit=(data)=>{
        const updateFeedback={
            feedback:data.feedback
        };
        axiosSecure.put(`/updateFeedback/${id}`,updateFeedback)
        .then((data)=>{
            console.log(data.data);
            if(
                data.data.classResult.modifiedCount>0 &&
                data.data.updateClassResult.modifiedCount>0
              ){
                Swal.fire({
                  position: "top",
                  icon: "success",
                  title: `feedback sent`,
                  showConfirmButton: false,
                  timer: 1500,});
                  refetch()
                  reset();
                  closeModal()
              }
            })
            .catch((error)=>{
              console.log(error);
        })
    }
    return (
        <div>
           <input type="checkbox" id={`modal-${id}`} className='modal-toggle'></input> 
           <div className='modal'>
            <div className='modal-box'>
                <h3 className='font-bold text-lg mb-4'>Feedback</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                    className='p-3 border-2 rounded'
                    name='feedback'
                    type="text"
                    {...register("feedback")}
                    placeholder='Write your feedback...'  
                    cols="51"
                    rows="5"
                    required >

                    </textarea>
                    <div className='modal-action'>
                        <label className='btn' type="submit" >
                          <input htmlFor={`modal-${id}`} type="submit" value="Send"    />
                        </label>
                    </div>

                </form>

            </div>
            
           </div>
        </div>
    );
};

export default ClassModal;