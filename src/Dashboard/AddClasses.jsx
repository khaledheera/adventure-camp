import React, { useContext, useState } from 'react';
import AddClassForm from './AddClassForm';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { imageUpload } from '../Api/utils';
import { addClass } from '../Api/classess';

const AddClasses = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image')
    // handle form submit
    const handleSubmit = event => {
      event.preventDefault()
      setLoading(true)
     
      const className = event.target.class_name.value
      const price = event.target.price.value
      const instructor_name = event.target.instructor_name.value
      const instructor_email = event.target.email.value
      const seats = event.target.seats.value
      const image = event.target.image.files[0]
      setUploadButtonText('Uploading...')
      // Upload image
      imageUpload(image)
        .then(data => {
          const classData = {
            className,
            instructor_name,
            instructor_email,
            students:0,
            seats,
            status:"Pending",
            price: parseFloat(price),
            image: data.data.display_url,
            instructor: {
              name: user?.displayName,
              image: user?.photoURL,
              email: user?.email,
            },
          }
  
          // post room data to server
          addClass(classData)
            .then(data => {
              console.log(data)
              setUploadButtonText('Uploaded!')
              setLoading(false)
              toast.success('Class Added!')
              navigate('/dashboard/myClasses')
            })
            .catch(err => console.log(err))
  
          setLoading(false)
        })
        .catch(err => {
          console.log(err.message)
          setLoading(false)
        })
    }
  
    const handleImageChange = image => {
      console.log(image)
      setUploadButtonText(image.name)
    }
  
   

    
    return (
        <div>
            <AddClassForm
            handleSubmit={handleSubmit}
            loading={loading}
            handleImageChange={handleImageChange}
            uploadButtonText={uploadButtonText}
            
            />
        </div>
    );
};

export default AddClasses;





