export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

export function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let currentNode: ListNode | null = head;
  let nextNode: ListNode | null = head.next;

  while (currentNode && nextNode) {
    if (currentNode === nextNode) {
      return true;
    }

    currentNode = currentNode.next;
    nextNode = nextNode.next?.next ?? null;
  }

  return false;
}
