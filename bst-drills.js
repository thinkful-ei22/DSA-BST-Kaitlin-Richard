const BinarySearchTree = require('./bst-class');


// function main() {
  
const BST = new BinarySearchTree;

BST.insert(3);
BST.insert(100);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);

// boolBST(BST);
// console.log(boolBST(BST));
console.log(thirdBiggestNode(BST));
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

function boolBST(bst) {
  // let right = !boolBST(bst.right);
  // let left = !boolBST(bst.left);

  console.log('------', bst.key, '---------');
  // console.log('left --- ', left);
  // console.log('right --- ', right);
  // console.log('right bool --- ', bst.right ? right.key: 'nada');
  // console.log('left bool --- ', bst.left ? left.key: 'nada');
  
  if (!bst.left && !bst.right) {
    return true;
  }
  if (bst.left) {
    if (bst.key < bst.left.key) {
      return false;
    }
    if(!boolBST(bst.left)) {
      return false;
    }
  }

  if (bst.right) {
    if (bst.key > bst.right.key) {
      return false;
    }
    if (!boolBST(bst.right)) {
      return false;
    }
  }
  
  return true;

  // return right.key < bst.key && left.key > bst.key && right && left;
}

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

// input 

// Write an algorithm to find the third largest node in a binary search tree
// go to biggest (all the way right)
// check if left - if not, go back until there is a left (x3)

function thirdBiggestNode (bst, array=[]) {  
  // // we've gone back 3 times from the biggest node
  // if (count === 3) {
  //   // return bst.key;
  //   console.log('Reached 3');
  // }

  // if (bst.left) {
  //   let maxNode = _findMax(bst);
  //   console.log('biggest node', maxNode.key);
  //   console.log('count is', count);
  //   let secondBiggestNode = thirdBiggestNode(maxNode.left, count+1);
  //   // console.log('second biggest', maxNode.parent.key);

  // } else {
  //   console.log('else case ----');
  //   thirdBiggestNode(bst.parent, count+1);
  // }
  if (bst) {
    // console.log('key ----- ', bst.key); 
    thirdBiggestNode(bst.left, array);
    array.push(bst.key);
    thirdBiggestNode(bst.right, array);
  }

  // console.log(array[array.length-3]);
  return array[(array.length-3)];
}
