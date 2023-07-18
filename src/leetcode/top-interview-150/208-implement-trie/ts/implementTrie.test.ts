import { Trie } from './implementTrie';

describe('Trie', () => {
  test('should create new Trie', () => {
    const trie = new Trie();
    expect(trie).toBeDefined();
  });

  test('should insert word', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('apple')).toBeTruthy();
    expect(trie.search('app')).toBeFalsy();
    expect(trie.startsWith('app')).toBeTruthy();
    trie.insert('app');
    expect(trie.search('app')).toBeTruthy();
  });

  test('should return false if word not found', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.search('dog')).toBeFalsy();
  });

  test('should return false if prefix not found', () => {
    const trie = new Trie();
    trie.insert('apple');
    expect(trie.startsWith('dog')).toBeFalsy();
  });
});
