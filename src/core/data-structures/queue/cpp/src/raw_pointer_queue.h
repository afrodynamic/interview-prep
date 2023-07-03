#ifndef RAW_POINTER_QUEUE_H_
#define RAW_POINTER_QUEUE_H_

#include "queue_interface.h"

class RawPointerQueue : public QueueInterface {
public:
  RawPointerQueue();
  RawPointerQueue(int capacity);
  ~RawPointerQueue();
  void enqueue(int value) override;
  int dequeue() override;
  int peek() override;
  bool isEmpty() override;
  bool isFull() override;
  int size() override;

private:
  int *queue;
  int front;
  int rear;
  int capacity;
  int count;
  void resize(int newCapacity);
};

#endif // RAW_POINTER_QUEUE_H_
