class Api {
    static getAllDepartments() {
        return fetch('http://localhost:3001/departments')
            .then(res => res.json())
            // .then(data => console.log(data))
            .catch(err => err)
    }
}

export default Api