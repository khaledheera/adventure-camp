import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../Popular Instructors/PopularInstructors';
import Register from '../Register/Register';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
			<title> Adventure Camp| Home </title>
			</Helmet>
            <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
            <Register/>
        </div>
    );
};

export default Home;