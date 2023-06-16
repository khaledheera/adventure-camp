import React from 'react'
import { TbFidgetSpinner } from 'react-icons/tb'
import useAuth from '../Hook/useAuth'

const AddClassForm = ({
  handleSubmit,
  handleImageChange,
  uploadButtonText,
  loading = false,
 
}) => {
  const {user} = useAuth();
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 '>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 border  px-10'>
          
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
              Class Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-sky-300 focus:outline-sky-500 rounded-md '
                name='class_name'
                id='class name'
                type='text'
                placeholder='Class Name'
                required
              />
            </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input onChange={event => {
                        handleImageChange(event.target.files[0])
                      }}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-sky-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-sky-500'>
                     {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                
                <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
              Instructor Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-sky-300 focus:outline-sky-500 rounded-md '
                defaultValue={user.displayName}
                name='instructor_name'
                id='instructor name'
                type='text'
                placeholder='Instructor Name'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
              Instructor Email
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-sky-300 focus:outline-sky-500 rounded-md '
                defaultValue={user.email}
                name='email'
                id='title'
                type='email'
                placeholder='Instructor Email'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
                <label htmlFor='guest' className='block text-gray-600'>
               Seats
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-sky-300 focus:outline-sky-500 rounded-md '
                  name='seats'
                  id='seats'
                  type='number'
                  placeholder='Seats'
                  required
                />
              </div>
            
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-sky-300 focus:outline-sky-500 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>

            </div>

        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-sky-500'
        >
          {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' size={24} />
          ) : (
            'Save & Continue'
          )}
        </button>
      </form>

    </div>
  )
}

export default AddClassForm