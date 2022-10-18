const solve = (nums1, nums2, n, m) => {
    let res = []
    let first = nums1.slice(0, n)
    let second = nums2.slice(0, m)
    let i=0 
    let j = 0 
    let result = []

    while(i < first.length && j < second.length){
        if(first[i] < second[j]) {
            result.push(first[i])
            i++
        }
        else{
            result.push(second[j])
            j++
        }
    }
    if (i < first.length) first.slice(i).forEach((n) => result.push(n));
  if (j < second.length) second.slice(j).forEach((n) => result.push(n));
  nums1.length = 0;
  result.forEach(n => nums1.push(n))
    console.log(nums1)
}

solve([1,2,3,0,0,0], [2,5,6], 3,3)
solve([1], [], 1,0)