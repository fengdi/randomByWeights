# randomByWeights

#### 介绍
Returns the index based on the array weight probability.
根据数组权重概率返回下标


#### install

1.  `npm i randombyweights`

2.  `const randomByWeights = require('randombyweights'); ` or `import default from "randombyweights";`

3.  `let randonIndex = randombyweights([3,4,5]);`


#### 使用说明

参数 boxProbabilitys 权重数组

返回值  Number Index 下标


根据数组权重概率返回下标

 [1, 1, 1]       返回下标  0  1  2概率相等 都为1/3 

 [5, 1, 3]       返回下标  0概率5/9 1概率1/9  2概率3/9

 [2, 94, 3, 1]   返回下标  0概率2%  1概率94%  2概率3%  3概率1%

 [0.02, 0.94, 0.03, 0.01] 和上面 [2, 94, 3, 1] 等效（和比例相关）

 注：不是数组返回-1   权重总和为0（比如[0,0,0]）返回-1

