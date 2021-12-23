function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    curr = next;
    prev = curr;
  }
  return prev;
}

function findMiddleNode(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow
}

function isPalindrome(head) {
  if (!head) return null;
  // 找到前半部分链表的尾结点，翻转后半部分
  const middleNode = findMiddleNode(head);
  const secondHalfStart = reverseList(middleNode.next);
  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2) {
    if (p1.val !== p2.val) result = false;
    p1 = p1.next;
    p2 = p2.next;
  }
  // 还原链表
  middleNode.next = reverseList(secondHalfStart)
  return result;
}