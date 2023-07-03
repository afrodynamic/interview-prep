#ifndef STACK_INTERFACE_H
#define STACK_INTERFACE_H

class StackInterface {
public:
  virtual ~StackInterface() {}
  virtual bool isEmpty() = 0;
  virtual int size() = 0;
  virtual void push(int data) = 0;
  virtual int pop() = 0;
  virtual int peek() = 0;
};

#endif // STACK_INTERFACE_H
