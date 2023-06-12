// import React, { useEffect, useState } from 'react';
// import Instructors from './Instructors';

// const PopularInstructors = () => {
//     // const [instructors, setInstructors] = useState([]);

//     // useEffect(() => {
//     //     fetch('http://localhost:5000/instructors')
//     //         .then(res => res.json())
//     //         .then(data => setInstructors(data));
//     // }, [])

//     return (
//         <div className='mt-10 bg-violet-300'>
//         <h2 className='font-bold text-2xl text-sky-800 text-center'>Popular Instructors</h2>
//         <div className='grid grid-cols-3 gap-4 mt-10'>
        
//           {
//             instructors.map(instructor => <Instructors
//             key={instructor.id}
//             instructor={instructor}
//             ></Instructors>)
//           }
            
//         </div>

//     </div>
//     );
// };

// export default PopularInstructors;