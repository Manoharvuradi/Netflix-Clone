import axios from 'axios';

const instance ={
    baseURL:'https://api.themoviedb.org/3/movie/550',
};
const inst = axios.create(instance);
export default inst;