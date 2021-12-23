var addTwoNumbers = function (l1, l2) {
  function nodeSum(l1, l2, carry) {
    console.log(l1, l2, carry)
    // if (l1 || l2 || carry) {
    //   console.log(11, carry)
    //   let val1 = l1 ? l1 : 0;
    //   let val2 = l2 ? l2 : 0;
    //   let sum = val1 + val2 + carry;
    //   let carry = Math.floor(sum / 10);
    //   let val = sum % 10;
    //   let node = new ListNode(val);
    //   node.next = nodeSum(l1.next, l2.next, carry)
    //   return node;
    // }
  }
  let carry = 0;

  return nodeSum(l1, l2, carry);
};

console.log(addTwoNumbers(6, 5))