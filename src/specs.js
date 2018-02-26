'use es6';

import a from './a';
import b from './b';

a.then((result) => console.log(result === `(${b()})`));