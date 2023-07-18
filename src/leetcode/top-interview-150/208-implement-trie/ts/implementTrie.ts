export class Trie {
  private data: Record<string, unknown>;

  constructor() {
    this.data = {};
  }

  insert(word: string): void {
    let node = this.data;

    for (const char of word) {
      if (!node[char]) {
        node[char] = {};
      }

      node = node[char] as Record<string, unknown>;
    }

    node.isEnd = true;
  }

  search(word: string): boolean {
    let node = this.data;

    for (const char of word) {
      if (!node[char]) {
        return false;
      }
      node = node[char] as Record<string, unknown>;
    }

    return !!node.isEnd;
  }

  startsWith(prefix: string): boolean {
    let node = this.data;

    for (const char of prefix) {
      if (!node[char]) {
        return false;
      }

      node = node[char] as Record<string, unknown>;
    }

    return true;
  }
}
