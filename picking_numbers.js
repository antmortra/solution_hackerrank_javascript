// El ejercicio trata de encontrar dentro de un array, el subarray de mayor longitud cuyos elementos al restarlos sea menor o igual a 1.

const ejemplo = [4, 6, 5, 3, 3, 1];

const ejemploSort = ejemplo.sort((a, b) => a - b);

let solution = [];
let currentValue = 0;
let numberInicial = 0;


for ( let i = 0; i < ejemploSort.length; i++) {

    let result = Math.abs(ejemploSort[numberInicial] - ejemploSort[i]);

   if ( result <= 1 ) {

      solution.push(ejemploSort[i]);

      if ( solution.length > currentValue ) {

        currentValue = solution.length;
      }
   } 
   else {

    numberInicial = i;

        if ( solution.length > currentValue ) {
            
            currentValue = solution.length;
        }

        solution = [];

   solution.push(ejemploSort[i]);
   }
  
};


return currentValue;






