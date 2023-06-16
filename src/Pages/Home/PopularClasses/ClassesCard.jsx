import React from "react";
import { Link } from "react-router-dom";

const ClassesCard = ({ popularClass }) => {
  const { image, className, students, instructor_name, availableSeats, price } =
    popularClass;
  return (
    <div className="card lg:w-96 glass px-4 py-5 mx-auto  md:px-24 lg:px-10">
      <img
        className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
        src={image}
        alt=""
      />
      <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
        {className}
      </p>

      <p>
        <span className="font-bold">Instructor: </span>
        {instructor_name}
      </p>
      <p>
        <span className="font-bold">Total Students: </span>
        {students}
      </p>
      <p>
        <span className="font-bold">Available Seats: </span>
        {availableSeats}
      </p>
      <p>
        <span className="font-bold">Price: $</span>
        {price}
      </p>
   

    </div>
  );
};

export default ClassesCard;
