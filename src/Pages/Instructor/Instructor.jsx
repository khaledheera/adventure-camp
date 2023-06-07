import React, { useEffect, useState } from 'react';
import InstructorCard from './InstructorCard';

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('popularInstructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, [])
    return (
        <div className='mt-10 bg-violet-300'>
        <h2 className='font-bold text-2xl text-sky-800 text-center'>MEET OUR  Instructors</h2>
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