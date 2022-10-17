## Arrays Sums 

1. [Sum of Rows](./SumOfRow.js)
2. [Random Pratice](./RandomPractice.js)
3. [Spiral Traversal](./SpiralTraversal.js)
4. [2D Array and Phrase](./2DArrayPharse.js)

### Array Insertion

---

Three ways to insert in Array, 

1. Inserting a new element at the beginning of an Array. 
2. Inserting a new element at any given index inside the Array. 

### Inserting at the End of an Array

---

Inserting at the end of an array is a normal operation. 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0975cede-dabb-4490-97ea-01ab5826d2d0/Untitled.png)

```jsx
// Declare an integer array of 6 elements
const Array = new Array(6);
let length = 0;

// Add 3 elements to the Array
for (int i = 0; i < 3; i++) {
    intArray[length] = i;
    length++;
```

### Inserting at the start of an Array

---

To insert an element at the start of an Array, we'll need to shift all other elements in the Array to the right by one index to create space for the new element. This is a very costly operation, since each of the existing elements has to be shifted one step to the right. In terms of time complexity analysis, this is a linear time complexity: O(N)*O*
(*N*), where O(*N)*  is the length of the Array.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/33c295b8-2fe3-44b0-9f3a-5f7239e13175/Untitled.png)

```jsx
for (int i = 3; i >= 0; i--) {
    intArray[i + 1] = intArray[i];
}

// Now that we have created space for the new element,
// we can insert it at the beginning.
intArray[0] = 20;
```

## Inserting Anywhere in the Array

---

Similarly, for inserting at any given index, we first need to shift all the elements from that index onwards one position to the right. Once the space is created for the new element, we proceed with the insertion. If you think about it, insertion at the beginning is basically a special case of inserting an element at a given index—in that case, the given index was `0`.