import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';
import { Link } from 'react-router-dom';
import './class.css'

const PopularClasses = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch(`https://adventure-camp-server.vercel.app/classes?limit=${6}`)
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])

    return (
        <div className=' bg-teal-950 p-10 '>
            <h2 className='font-bold text-4xl text-orange-200 text-center'>Popular Classes</h2>
            <div className='grid lg:grid-cols-3 gap-4 mt-10'>
            
              {
                classes.map(popularClass => <ClassesCard
                key={popularClass._id}
                popularClass={popularClass}
                ></ClassesCard>)
              }
                
            </div>
           <div className='text-center justify-center mt-5 ' >
           <Link to='/classes'>
    <button className="btn btn-accent text-center">See More</button>
    </Link>
           </div>
        </div>
    );
};

export default PopularClasses;