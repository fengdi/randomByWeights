# randomByWeights

#### introduction
Returns the index based on the array weight probability.

#### install

 `npm i randombyweights`

#### use

@param {Array}  Probabilitys

@return {Number} Index

```javascript
const randomByWeights = require('randombyweights');
let randomIndex = randombyweights([3,4,5]); // 0:3/12   1:4/12   2:5/12
```



#### eg.

- [1, 1, 1] Return the index 0,1,2 Probability is equal, both are 1/3.

- [5, 1, 3] Return the index  0 probability is 5/9,  1 probability is 1/9,  2 probability is 3/9.

- [2, 94, 3, 1] Returns the index 0 probability is 2%,  1 probability is 94%, 2 probability is 3%, 3 probability is 1%.

- [0.02, 0.94, 0.03, 0.01] is equivalent to the above [2, 94, 3, 1] (related to the ratio)

- Note: not array returns -1 and weight sum is 0 (eg [0, 0, 0]) returns -1

