'use strict';

const Node = require('./node');
const linkList = require('./ll');

let reverse = function(){
  let next;
  let curr = this.head;
  let prev = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  this.head = prev; 
  return this;
};

reverse();
