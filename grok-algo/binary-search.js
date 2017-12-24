function binarySearch(arr,elem) {
  let low = 0;
  let high = arr.length - 1;

  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if(guess === elem) {
      return mid;
    }

    if(guess > elem) {
      high = mid - 1;
    }else if(guess < elem) {
      low = mid + 1
    }
  }

  return false;
}

const res = binarySearch([1,2,3,5,7,8,9,10,11,13,15,19], 13);

console.log(res);
