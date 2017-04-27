import { LOGIN } from '../constants/login';
import { post } from '../utils/fetch';

export {
  login
};

function login(credentials) {
  return dispatch => {
    return post('http://front-camp-chat.herokuapp.com/login', credentials).then(response => {
      return response.json()
        .then(user => {
          return dispatch({
            type: LOGIN,
            payload: {
              user
            }
          });
        })
        .catch(err => console.log(err));
    });
  };
}
