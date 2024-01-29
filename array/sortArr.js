//insertion sort 

function sortArr(arr){
    let num = arr.length;
    for(let i=1;i<num;i++){
        let key = arr[i];
        let j= i-1;


        while(j>=0 && arr[j] >key){
            arr[j+1] = arr[j];
            j= j-1;
        }
        arr[j+1] = key;
    }
    return arr;
}

let arr=[5,4,3,6,7,2,1,9];
console.log(sortArr(arr));



//using bubble sort


function bubbleSort(arr){
    let n = arr.length;
    let swapped;

    do{
        swapped = false;
        for(let i=0;i<n-1;i++){
            if(arr[i] >arr[i+1]){
                let temp = arr[i];
                arr[i] =arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }while (swapped);
    return arr;
}

let arr1 = [5,4,3,2,16,7,8,9];
console.log(bubbleSort(arr1));
