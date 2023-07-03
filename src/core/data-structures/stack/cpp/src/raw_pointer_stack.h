#ifndef RAW_POINTER_STACK_H
#define RAW_POINTER_STACK_H

#include "stack_interface.h"

class RawPointerStack : public StackInterface {
public:
  RawPointerStack();
  RawPointerStack(int capacity);
  ~RawPointerStack();
  bool isEmpty() override;
  int size() override;
  void push(int data) override;
  int pop() override;
  int peek() override;

private:
  int *stack;
  int top;
  int capacity;
  void resize(int newCapacity);
};

#endif // RAW_POINTER_STACK_H
