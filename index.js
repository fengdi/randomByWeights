//根据数组权重概率返回下标
// [1, 1, 1]       返回下标  0  1  2概率相等 都为1/3 
// [5, 1, 3]       返回下标  0概率5/9 1概率1/9  2概率3/9
// [2, 94, 3, 1]   返回下标  0概率2%  1概率94%  2概率3%  3概率1%
// [0.02, 0.94, 0.03, 0.01] 和上面等效（和比例相关）
// 注：不是数组返回-1   权重总和为0（比如[0,0,0]）返回-1

var randomByWeights = function(boxProbabilitys){

    if(!Array.isArray(boxProbabilitys)){
        return -1;
    }
    boxProbabilitys = [0].concat(boxProbabilitys);

    let boxProbabilityMap = [];
    let boxProbabilityWeight = boxProbabilitys.reduce((a, c) => {
        boxProbabilityMap.push(a + c); 
        return a + c;
    });
    let randomWeight = Math.random()*boxProbabilityWeight;

    return boxProbabilityMap.findIndex(pb=>pb>randomWeight);
};


module.exports = randomByWeights