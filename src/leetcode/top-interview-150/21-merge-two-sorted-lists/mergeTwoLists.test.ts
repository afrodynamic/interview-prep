import { mergeTwoLists } from './mergeTwoLists';

describe('mergeTwoLists', () => {
  test('should return null for two empty lists', () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });

  test('should return the non-empty list if one list is empty', () => {
    const list1 = { val: 1, next: { val: 2, next: null } };
    expect(mergeTwoLists(list1, null)).toEqual(list1);
    expect(mergeTwoLists(null, list1)).toEqual(list1);
  });

  test('should handle combining the rest of a list if the first list is smaller', () => {
    const list1 = { val: 1, next: { val: 2, next: null } };
    const list2 = { val: 3, next: null };
    const expected = {
      val: 1,
      next: { val: 2, next: { val: 3, next: null } },
    };
    expect(mergeTwoLists(list1, list2)).toEqual(expected);
  });

  test('should handle combining the rest of a list if second list is smaller', () => {
    const list1 = { val: 3, next: null };
    const list2 = { val: 1, next: { val: 2, next: null } };
    const expected = {
      val: 1,
      next: { val: 2, next: { val: 3, next: null } },
    };
    expect(mergeTwoLists(list1, list2)).toEqual(expected);
  });

  test('should merge two sorted lists', () => {
    const list1 = { val: 1, next: { val: 3, next: null } };
    const list2 = { val: 2, next: { val: 4, next: null } };
    const expected = {
      val: 1,
      next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
    };
    expect(mergeTwoLists(list1, list2)).toEqual(expected);
  });
});
