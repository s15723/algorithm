/**
 * Remove Linked List Elements
 * Remove all elements from a linked list of integers that have value val
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number | number[], next?: ListNode | null) {
    if (typeof val === "number") {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    } else {
      this.val = val[0];
      let cur: ListNode = this;
      for (let i = 1; i < val.length; i++) {
        cur.next = new ListNode(val[i]);
        cur = cur.next;
      }
    }
  }
}
// 虚拟头节点循环遍历解决
function removeElements(head: ListNode | null, val: number): ListNode | null {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let prev = dummyHead;
  let cur = head;

  while (cur !== null) {
    if (cur.val === val) {
      prev.next = cur.next;
    } else {
      prev = cur;
    }
    cur = prev.next;
  }

  return dummyHead.next;
}

// 递归方式解决
function removeElementsRecursive(
  head: ListNode | null,
  val: number,
  depth: number
): ListNode | null {
  const depthString = generateDepthString(depth);
  console.log(`${depthString} Call: remove ${val} in ${print(head)}`);

  if (head === null) {
    console.log(`${depthString} Return: null`);
    return null;
  }

  let res: ListNode = removeElementsRecursive(head.next, val, depth + 1);
  console.log(`${depthString} After remove ${val}: ${print(res)}`);

  let ret: ListNode;
  if (head.val === val) {
    ret = res;
  } else {
    head.next = res;
    ret = head;
  }
  console.log(`${depthString} Return: ${print(ret)}`);

  return ret;

  //   if (head.val === val) {
  //     return removeElementsRecursive(head.next, val, depth + 1);
  //   } else {
  //     head.next = removeElementsRecursive(head.next, val, depth + 1);
  //     return head;
  //   }
  // 这样子写会简洁很多，但 head 需要删除时，会多一步 head.next 赋值的操作
  // head.next = removeElementsRecursive(head.next, val);
  // return head.val === val ? head.next : head;
}

function generateDepthString(depth: number) {
  let str = String(depth);
  for (let i = 0; i < depth; i++) {
    str += "--";
  }
  return str;
}

function print(list: ListNode) {
  let cur = list;
  let str = "";
  while (cur !== null) {
    str += `${cur.val}->`;
    cur = cur.next;
  }
  str += "null";
  return str;
}

// const linkedList = removeElements(new ListNode([1, 2, 6, 3, 4, 5, 6]), 6);
// const linkedList2 = removeElementsRecursive(
//   new ListNode([1, 2, 6, 3, 4, 5, 6]),
//   6,
//   0
// );
// console.log(print(linkedList));
console.log(
  print(removeElementsRecursive(new ListNode([1, 2, 6, 3, 4, 5, 6]), 6, 0))
);
