import _ from 'lodash';

const data = [
  {
    username: 'kliz',
    role: 'admin'
  },
  {
    username: 'john',
    role: 'seller'
  },
  {
    username: 'doe',
    role: 'seller'
  },
  {
    username: 'jane',
    role: 'customer'
  }
];

const rta= _.groupBy(data, (item) => item.role);
console.log(rta);
