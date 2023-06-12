// Add a room
export const addClass= async classData => {
    const response = await fetch(`http://localhost:5000/addClasses`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(classData),
    })
  
    const data = await response.json()
    return data
  }

  export const getAllClasses = async () => {
    const response = await fetch(`http://localhost:5000/addClasses`)
    const data = await response.json()
    return data
  }



  export const getClasses = async email => {
    const response = await fetch(`http://localhost:5000/allClasses/${email}`)
    const data = await response.json()
    return data
  }
  
 