import { useState } from 'react';

const IsInstructor = (email) => {
	const [isSeller, setIsSeller] = useState(false);
	const [isSellerLoading, setIsSellerLoading] = useState(true);

	fetch(`http://localhost:5000/user/instructor/${email}`, {
		headers: {
			authorization: `Bearer ${localStorage.getItem('Adventure-token')}`,
		}
	})
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			setIsSeller(data.isSeller);
			setIsSellerLoading(false);
		});

	return [isSeller, isSellerLoading];
};

export default IsInstructor;