import axios from 'axios';

export default {
  getProducts(){
    return axios.get('http://www.mocky.io/v2/5c9105cb330000112b649af8');
  }
}