import * as d from './shared.js';
console.log(d);
const i1 = await import('./dynamic-1.js');
const i2 = await import('./dynamic-2.js');
console.log(i1, i2);
