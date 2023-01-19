import axios from 'axios';
import Notiflix from 'notiflix';

async function MyAx() {
  const response = await axios.get(
    'https://pixabay.com/api/?key=32967286-aab6e01c55fd3080d6cca3650'
  );
  return response.data;
}
MyAx()
  .then(data => console.log(data))
  .catch(err => console.log(err));
