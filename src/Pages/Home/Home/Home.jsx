import React from 'react';
import Banner from '../Banner/Banner';
// import PopularClasses from '../PopularClasses/PopularClasses';
// import PopularInstructors from '../Popular Instructors/PopularInstructors';
import Register from '../Register/Register';

const Home = () => {
    return (
        <div>
            <Banner/>
            {/* <PopularClasses/>
            <PopularInstructors/> */}
            <Register/>
        </div>
    );
};

export default Home;