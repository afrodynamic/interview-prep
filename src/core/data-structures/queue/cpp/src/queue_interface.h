#ifndef QUEUE_INTERFACE_H_
#define QUEUE_INTERFACE_H_

class QueueInterface {
public:
  virtual void enqueue(int value) = 0;
  virtual int dequeue() = 0;
  virtual int peek() = 0;
  virtual bool isEmpty() = 0;
  virtual bool isFull() = 0;
  virtual int size() = 0;
};

#endif // QUEUE_INTERFACE_H_
