#include "vector_stack.h"

VectorStack::VectorStack() {}

bool VectorStack::isEmpty() { return stack.empty(); }

int VectorStack::size() { return stack.size(); }

void VectorStack::push(int data) { stack.push_back(data); }

int VectorStack::pop() {
  if (isEmpty()) {
    throw "Cannot .pop(), stack is empty";
  }

  int popped = stack.back();
  stack.pop_back();

  return popped;
}

int VectorStack::peek() {
  if (isEmpty()) {
    throw "Cannot .peek(), stack is empty";
  }

  return stack.back();
}
