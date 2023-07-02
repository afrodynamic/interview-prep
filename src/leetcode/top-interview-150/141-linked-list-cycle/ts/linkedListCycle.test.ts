import { ListNode, hasCycle } from './linkedListCycle';

describe('LinkedListCycle', () => {
  test('should return true for [3,2,0,-4] with pos = 1', () => {
    const head = new ListNode(3);
    head.next = new ListNode(2);
    head.next.next = new ListNode(0);
    head.next.next.next = new ListNode(-4);
    head.next.next.next.next = head.next;
    expect(hasCycle(head)).toBe(true);
  });

  test('should return true for [1,2] with pos = 0', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = head;
    expect(hasCycle(head)).toBe(true);
  });

  test('should return true for a list with two nodes pointing to the same node', () => {
    const head = new ListNode(1);
    const node2 = new ListNode(2);

    head.next = node2;
    node2.next = node2;

    expect(hasCycle(head)).toBe(true);
  });

  test('should return false for [1] with pos = -1', () => {
    const head = new ListNode(1);
    expect(hasCycle(head)).toBe(false);
  });

  test('should return false for [] with pos = -1', () => {
    expect(hasCycle(null)).toBe(false);
  });

  test('should return false for [] with pos = -1', () => {
    const head = new ListNode();
    expect(hasCycle(head)).toBe(false);
  });


  test('should return false for a list with two nodes not forming a cycle', () => {
    const head = new ListNode(1);
    const node2 = new ListNode(2);

    head.next = node2;

    expect(hasCycle(head)).toBe(false);
  });

  it('should create a node with a next node when provided', () => {
    const nextNode = new ListNode(2);
    const node = new ListNode(1, nextNode);
    expect(node.val).toBe(1);
    expect(node.next).toBe(nextNode);
    expect(hasCycle(node)).toBe(false);
  });
});
