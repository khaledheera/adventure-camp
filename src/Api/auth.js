export const saveUser = user => {
  const currentUser = {
    email: user.email,
    name: user.displayName
    ,
  }

  fetch(`http://localhost:5000/users/${user?.email,user?.displayName}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then(res => res.json())
    .then(data => console.log(data))
}




export const becomeInstructor= email => {
  const currentUser = {
    role: 'instructor',
  }

  return fetch(`http://localhost:5000/users/${email}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  }).then(res => res.json())
}


export const getRole = async email => {
  const response = await fetch(`http://localhost:5000/users/${email}`)
  const user = await response.json()
  return user?.role
}
  
 
  
  
   