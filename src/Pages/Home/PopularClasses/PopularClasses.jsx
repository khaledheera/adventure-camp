// import React, { useEffect, useState } from 'react';
// import ClassesCard from './ClassesCard';

// const PopularClasses = () => {

//     const [classes, setClasses] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/classes')
//             .then(res => res.json())
//             .then(data => setClasses(data));
//     }, [])

//     return (
//         <div className='mt-10'>
//             <h2 className='font-bold text-2xl text-sky-800 text-center'>Popular Classes</h2>
//             <div className='grid grid-cols-3 gap-4 mt-10'>
            
//               {
//                 classes.map(popularClass => <ClassesCard
//                 key={popularClass.id}
//                 popularClass={popularClass}
//                 ></ClassesCard>)
//               }
                
//             </div>

//         </div>
//     );
// };

// export default PopularClasses;