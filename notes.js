/* const fetchPeople = () => {
    fetch ("http://localhost:3000/people")
    .then((response) => {
        return response.json()
    }).then((data) => {

        console.log(data)
    })
 }
//fetchPeople

const fetchCats = () => {
    fetch ("http://localhost:3000/cats")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let joeysCats = data.filter(element => element.personId === 1) 
        console.log(joeysCats)
    })
    
 }
 //fetchCats()

 const fetchSombodiesCats = (id) => {
    fetch (`http://localhost:3000/people/${id}/cats`)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)  
        
    })
    
 }
 //fetchSombodiesCats(2) */