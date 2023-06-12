import { useState } from 'react';

const IsAdmin = (email) => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [isAdminLoading, setIsAdminLoading] = useState(true);

	fetch(`http://localhost:5000/user/admin/${email}`, {
		headers: {
			authorization: `Bearer ${localStorage.getItem('Adventure-camp-token')}`,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			
			setIsAdmin(data.isAdmin);
			setIsAdminLoading(false);
		});

	return [isAdmin, isAdminLoading];
};

export default IsAdmin;