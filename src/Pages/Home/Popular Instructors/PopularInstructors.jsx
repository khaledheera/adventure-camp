import React, { useEffect, useState } from 'react';
import Instructors from './Instructors';
import { Link } from 'react-router-dom';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch(`https://adventure-camp-server.vercel.app/classes?limit=${6}`)
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, [])

    return (
        <div className=' bg-teal-950 p-10'>
          
        <h2 className='font-bold text-4xl text-orange-200 text-center p-10'>Popular Instructors</h2>
        <div className='grid lg:grid-cols-3 gap-4 mt-10'>
        
          {
            instructors.map(instructor => <Instructors
            key={instructor._id}
            instructor={instructor}
            ></Instructors>)
          }
            
        </div>
        <div className='text-center justify-center mt-5 ' >
           <Link to='/instructor'>
    <button className="btn btn-accent text-center">See More</button>
    </Link>
           </div>

    </div>
    );
};

export default PopularInstructors;