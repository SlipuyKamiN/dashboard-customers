import axios from 'axios';

export const getUsers = async () => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    return data;
  } catch (error) {
    console.log(error);
    alert('Oops, something went wrong. Please reload the page');
  }
};
