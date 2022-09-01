# Two Pointer Approach 

having two models 
      ⬇
______________________
⬇                   ⬇
Model-1            Model-2
Opposite           Same
Direction         Direction  


1. In Opposite Direction 

arr = [4,6,7,8,9,11,17,21]
K = 16 

So we have to find the pairs which is equal to K. We will solve it with 1st model using two pointer in opposite direction 

let's take left = 0, right = N - 1 

we will check until left < right

let sum = arr[left] + arr[right] 

if sum == K return true 
else return false 

1. Case one 
l = 0, r = 7 
4 + 21 = 27  > K so, r-- 

2. Case Two, 
l= 0, r = 6
4 + 17 = 21 > K so, r-- 

3. Case Three 
l = 0, r = 5
4 + 11 = 15 < K so, l++

4. Case Four
l = 1, r= 5
6 + 11 = 17, so r-- 

5. Case Five 
l = 1, r =4 
6 + 9 = 15 < K, so l++

6. Case Six, 
l = 2, r= 4 
7  + 9 = 16 == K return true


Similarly we do it for triplet sum -> Check out TripletSum.js

[Segregate O's and 1's](./Segragate0and1.js)

Here we will keep zeros to left and 1's to the right of the array. We will not use sort() method because it has time complexity of $O(N. logN)

We will fix it with two pointer approach in $0(N) time complexity. 

1. Keep one pointer on the left and another on the right 
2. If zeros on left continue 
3. If ones on the right continue 
4. else if zeros on right or one on the left we will switch the values 


# Sliding Window 
       ⬇️
--------------------------------------------------
⬇️                                               ⬇️
Model - 1                                   Model - 2 
- Size of Sliding window is fixed           - Size of the sliding window may vary 
- given in the questions                    - not given in the questions