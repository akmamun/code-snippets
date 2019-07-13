import axios from "axios";  /* npm install axios*/
/* description: this function for callback api endpoint
                 contains GET,POST,PUT, DELETE requests via axios package
   params: id , data
         - getOne method need only id params
         - getAll method no need any param
         - create method need only data param
         - updateByID method need both id and data params
         - update method need only data param
         - delete method also need only id param
   return: getOne, getAll, updateByID, update, delete
*/

export default {
    endpoint(url) {
        url = "base url"+ url; //concat base url and url with base api endpoint
        return {
            getOne: (id) => axios.get(url + `/${id}`), //id_url
            getAll: () => axios.get(url),
            create: (data) => axios.post(url, data), //url, data
            updateByID: (id, data) => axios.put(url + `/${id}`, data), //url, data
            update: (data) => axios.put(url, data),  // without id
            delete: (id) => axios.delete(url + `/${id}`),
        }
    },
}
