import { R2Explorer } from 'r2-explorer';

export default R2Explorer({ readonly: false, basicAuth: [{
    username: 'admin',
    password: 'admin'
  },{
    username: 'username',
    password: '1235678'
  }]
});
