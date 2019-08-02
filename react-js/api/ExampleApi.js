// note: if axios install it by npm install axios
const axios = require('axios')

const baseUrl =  "http://127.0.0.1:5000/";
const todos = baseUrl + "todos";

export default {
    endpointLoadWithFetch() {
        return {
            getOne: ({ id }) => fetch(todos + `/${id}`), //id_url 
            getAll: () => fetch(todos),  //url
            create: (data) => fetch(todos, data),  //url, data
            update: ({ id }, data) => fetch(todos + `/${id}`, data), //url, data
            delete: ({ id }) => fetch(todos + `${id}`)
        }

    },
    endpointLoadWithAxios() {
       return {
            getOne: ({id}) => axios.get(todos + `/${id}`), //id_url 
            getAll: () => axios.get(todos),
            create: (data) => axios.post(todos, data), //url, data
            update: ({ id }, data) => axios.put(todos + `/${id}`, data), //url, data
            delete: ({ id }) => axios.delete(todos + `/${id}`)//id_url
        }
    }
}
// componentDidMount(){
// endpointLoadWithAxios().getAll()
//     .then(response => response.json()  //fetch method need to convert json
//         .then(data => this.setState({ todos: data })));  //define converted data state variable
//}
// componentDidMount(){
    // endpointLoadWithAxios().getAll()
     //   .then(response => this.setState({ axiosTodos: response.data }))
//}
