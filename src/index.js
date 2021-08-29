
// You should implement your task here.

module.exports = function towelSort (matrix) {


if (!matrix) return [];

  let result = [];
	
  for (let i = 0; i < matrix.length; i++) {

      for (let j = 0; j < matrix[i].length; j++) {

		 
        let columnNum = i % 2 == 0
        ? j
        : (matrix[i].length - j - 1);

		 
        result.push (matrix[i][columnNum])
		  

      }
  }
  return  result;
}
