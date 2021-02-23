import axios from 'axios';

const KEY = 'AIzaSyC93GJJ0JHhzhD39yq2dva21UBD9pF99bw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY,
  }
});