/**
* ------------------------------------------------------------------
* first one is classic array fast sort ...
* ------------------------------------------------------------------
*/
function fastSort(targetArray, left, right, median){
    if(!Array.isArray(targetArray)) throw new Error('not an array ...');
    function divide(arr, median){
        var len = arr.length,
            temp,
            median = median || arr[0],
            i = 0,
            j = len - 1;
        
        var hack = 0;
        while(i < j && hack < 100){
            hack++;
            while(arr[i] < median){
                i++;
            }
            if(arr[j] < median) {
                temp = arr[i];
                arr[i] = arr[j];
            }

            while(arr[j] >= median){
                j--;
            }
            if(arr[i] >= median) {
                temp = arr[j];
                arr[j] = arr[i];
            };
        }

        console.log('ending ....');
    }
};

/**
* ------------------------------------------------------------------
* random array generator
* ------------------------------------------------------------------
*/
function randomArrGen(length) {
    return Array.apply(null, Array(length)).map(item => Math.ceil(Math.random() * length));
}
