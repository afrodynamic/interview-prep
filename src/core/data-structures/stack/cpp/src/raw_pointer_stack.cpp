#include "raw_pointer_stack.h"

RawPointerStack::RawPointerStack() {
  capacity = 1;
  stack = new int[capacity];
  top = -1;
}

RawPointerStack::RawPointerStack(int capacity) {
  stack = new int[capacity];
  top = -1;
}

RawPointerStack::~RawPointerStack() { delete[] stack; }

bool RawPointerStack::isEmpty() { return top == -1; }

int RawPointerStack::size() { return top + 1; }

void RawPointerStack::push(int data) {
  if (top == capacity - 1) {
    resize(capacity * 2);
  }

  top++;
  stack[top] = data;
}

int RawPointerStack::pop() {
  if (isEmpty()) {
    throw "Cannot .pop(), stack is empty";
  }

  int popped = stack[top];
  top--;

  return popped;
}

int RawPointerStack::peek() {
  if (isEmpty()) {
    throw "Cannot .peek(), stack is empty";
  }

  return stack[top];
}

void RawPointerStack::resize(int newCapacity) {
  int *newStack = new int[newCapacity];

  for (int i = 0; i <= top; i++) {
    newStack[i] = stack[i];
  }

  delete[] stack;
  stack = newStack;
  capacity = newCapacity;
}
