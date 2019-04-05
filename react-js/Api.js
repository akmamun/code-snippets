// api.js file contains this code
// note: npm install axios
const axios = require('axios')

const baseUrl =  "http://127.0.0.1:5000/";
const todo = "todos";

export default {
    todosFetch() {
        return {
            getOne: ({ id }) => fetch(`${id}`),
            getAll: () => fetch(baseUrl + todo),
            create: (toCreate) => fetch(toCreate),
            update: (toUpdate) => fetch(toUpdate),
            delete: ({ id }) => fetch(`${id}`)
        }

    },
    todosAxios() {
        return {
            getOne: ({ id }) => axios.get(`${id}`),
            getAll: () => axios.get(baseUrl + todo),
            create: (toCreate) => axios.put(toCreate),
            update: (toUpdate) => axios.put(toUpdate),
            delete: ({ id }) => axios.delete(`${id}`)
        }
    }
}
//[Example Component](react-js/ApiIntegration.js)
// componentDidMount(){
// api.todosFetch().getAll()
//     .then(response => response.json()  //fetch method need to convert json
//         .then(data => this.setState({ todos: data })));  //define converted data state variable
//}
// componentDidMount(){
    // api.todosAxios().getAll()
     //   .then(response => this.setState({ axiosTodos: response.data }))
//}
