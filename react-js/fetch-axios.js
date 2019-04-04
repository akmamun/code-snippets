// for csrf use axios , build in function fetch for axios install axios
const fetchTest = fetch("http://127.0.0.1:5000/api/v1/todos/")
            .then((data)=> data.json());
        console.log(fetchTest);
const axiosTest = axios({
    method: 'get',
    url: 'http://127.0.0.1:5000/api/v1/todos/'
});
console.log(axiosTest);