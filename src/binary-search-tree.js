const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {

    function addItem(unit, data) {

      if(unit === null) {
        return new Node(data);
      }

      if(data > unit.data) {
        unit.right = addItem(unit.right, data);
      } else if (data < unit.data) {
        unit.left = addItem(unit.left, data);
      }

      return unit;
    }

    this.rootTree = addItem(this.rootTree, data);
  }

  has(data) {

    function searchItem(unit, data) {

      if (unit === null) {
        return false;
      } else if (unit.data === data) {
        return true;
      }

      if (data > unit.data) {
        return searchItem(unit.right, data);
      } else {
        return searchItem(unit.left, data);
      }
    }

    return searchItem(this.rootTree, data);
  }

  find(data) {

    function findItem(unit, data) {

      if (unit === null) {
        return null;
      } else if (unit.data === data) {
        return unit;
      }

      if (data > unit.data) {
        return findItem(unit.right, data);
      } else {
        return findItem(unit.left, data);
      }
    }

    return findItem(this.rootTree, data);
  }

  remove(data) {

    function removeItem(unit, data) {

      if (data > unit.data) {
        unit.right = removeItem(unit.right, data);

        return unit;
      } else if (data < unit.data) {
        unit.left = removeItem(unit.left, data);

        return unit;
      } else {
        if (unit.left === null && unit.right === null) {
          return null;
        }

        if (unit.left === null) {
          unit = unit.right;

          return unit;
        } else if (unit.right === null) {
          unit = unit.left;

          return unit;
        }

        let maxLeft = unit.left;

        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }

        unit.data = maxLeft.data;
        unit.left = removeItem(unit.left, maxLeft.data);

        return unit;
      }
    }

    this.rootTree = removeItem(this.rootTree, data);
  }

  min() {

    let unit = this.rootTree;

    while (unit.left) {
      unit = unit.left;
    }

    return unit.data;
  }

  max() {

    let unit = this.rootTree;

    while (unit.right) {
      unit = unit.right;
    }

    return unit.data;
  }
}

module.exports = {
  BinarySearchTree
};