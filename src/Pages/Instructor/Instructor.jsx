import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';
import { Helmet } from 'react-helmet-async';


const Instructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch(`https://adventure-camp-server.vercel.app/classes`)
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, [])

    return (
        <div className=''>
          <Helmet>
			<title> Adventure Camp| Instructor</title>
			</Helmet>
        <h2 className='font-bold text-2xl text-sky-800 text-center'>Meet Our Instructors</h2>
        <div className='grid grid-cols-3 gap-4 mt-10'>
        
          {
            instructors.map(instructor => <InstructorCard
            key={instructor.id}
            instructor={instructor}
            ></InstructorCard>)
          }
            
        </div>

    </div>
    );
};

export default Instructor;