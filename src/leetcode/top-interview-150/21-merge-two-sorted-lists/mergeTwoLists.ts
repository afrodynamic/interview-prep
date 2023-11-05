class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  let currentNode = new ListNode();
  const mergedList = currentNode;

  let list1Pointer: ListNode | null = list1;
  let list2Pointer: ListNode | null = list2;

  while (list1Pointer && list2Pointer) {
    if (list1Pointer.val <= list2Pointer.val) {
      currentNode.next = list1Pointer;
      list1Pointer = list1Pointer.next;
    } else {
      currentNode.next = list2Pointer;
      list2Pointer = list2Pointer.next;
    }

    currentNode = currentNode.next;
  }

  if (list1Pointer) {
    currentNode.next = list1Pointer;
  } else {
    currentNode.next = list2Pointer;
  }

  return mergedList.next;
};
