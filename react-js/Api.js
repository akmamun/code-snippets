import axios from "axios";
//helper function for api endpoint contains GET,POST,PUT, DELETE

const apiBase = "localhost:9010";
export default {
    endpoint(url) {
        url = apiBase + url; //concat base url and url with base api endpoint
        return {
            getOne: (id) => axios.get(url +`/${id}`), //id_url
            getAll: () => axios.get(url),
            create: (data) => axios.post(url, data), //url, data
            update: (id, data) => axios.put(url + `/${id}`, data), //url, data
            delete: (id) => axios.delete(url + `/${id}`),
        }
    },
}

