import { LOGIN } from '../constants/login';

export default {
  [LOGIN]: (state, { payload }) => {
    console.error('payload', payload);
    return payload.user;
  }
};
