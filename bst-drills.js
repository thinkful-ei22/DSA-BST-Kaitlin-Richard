const BinarySearchTree = require('./bst-class');


// function main() {
  
const BST = new BinarySearchTree;

BST.insert(3);
BST.insert(20);
BST.insert(10);
BST.insert(15);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);


// console.log(BST);
// }

// main();

// Height of a BST

const BSTHeight = (bst) => {

  if (!bst) {
    return 0;
  }

  let rightHeight = BSTHeight(bst.right);
  let leftHeight = BSTHeight(bst.left);
  console.log('---------------');
  console.log(bst.key);
  console.log('right --- ', rightHeight);
  console.log('left --- ', leftHeight);
  return (Math.max(leftHeight, rightHeight) + 1);
  
};

console.log(BSTHeight(BST));

const testMaxMin = (bst) => {

  // // starting @ 1 because current starts at the next right or left
  // let minCount = 0;
  // let maxCount = 0;
  // let height;
  // // console.log('left', bst.left);
  // // console.log('right', bst.right);
  // if (bst.left || bst.right) {
  // // min count route
  //   let current = bst.left;
  //   while (current) {
  //     minCount++;
  //     current = current.left;
  //   }

  //   // max count route
  //   current = bst.right;
  //   while (current) {
  //     maxCount++;
  //     current = current.right;
  //   }

  //   height = minCount > maxCount ? minCount : maxCount;
  // } else {
  // // if left and right and null then set height to 0;
  //   height = 0;
  // }

  // console.log(height);

  // return height;
};