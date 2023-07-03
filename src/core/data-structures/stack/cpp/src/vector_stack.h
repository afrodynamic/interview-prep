#ifndef VECTOR_STACK_H
#define VECTOR_STACK_H

#include "stack_interface.h"
#include <vector>

class VectorStack : public StackInterface {
public:
  VectorStack();
  VectorStack(int capacity);
  bool isEmpty() override;
  int size() override;
  void push(int data) override;
  int pop() override;
  int peek() override;

private:
  std::vector<int> stack;
};

#endif // VECTOR_STACK_H
