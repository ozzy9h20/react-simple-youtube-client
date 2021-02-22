import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID lx1OkJ3xe4OWOPvC9cqsOKFe2Qqtvh1W28DVMgziqhY',
  },
});
