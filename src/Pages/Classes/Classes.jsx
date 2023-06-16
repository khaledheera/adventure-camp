import React, { useEffect, useState } from 'react';
import ClassesCard from '../Home/PopularClasses/ClassesCard';
import ClassCard from './ClassCard';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('https://adventure-camp-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])
    return (
        <div className='mt-10'>
          <Helmet>
			<title> Adventure Camp| All Classes </title>
			</Helmet>
                    <h2 className='font-bold text-2xl text-sky-800 text-center'>All Classes</h2>
                     <div className='grid grid-cols-3 gap-4 mt-10'>
                    
                       {
                         classes.map(popularClass => <ClassCard
                        key={popularClass._id}
                        popularClass={popularClass}
                        ></ClassCard>)
                      }
                        
                   </div>
        
                 </div>
    );
};

export default Classes;