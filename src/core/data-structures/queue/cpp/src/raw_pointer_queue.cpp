#include "raw_pointer_queue.h"

RawPointerQueue::RawPointerQueue() {
  capacity = 1;
  queue = new int[capacity];
  front = 0;
  rear = -1;
  count = 0;
}

RawPointerQueue::RawPointerQueue(int capacity) {
  queue = new int[capacity];
  front = 0;
  rear = -1;
  count = 0;
}

RawPointerQueue::~RawPointerQueue() { delete[] queue; }

void RawPointerQueue::enqueue(int value) {
  if (isFull()) {
    resize(capacity * 2);
  }

  rear++;
  queue[rear] = value;
  count++;
}

int RawPointerQueue::dequeue() {
  if (isEmpty()) {
    throw "Cannot .dequeue(), queue is empty";
  }

  int dequeued = queue[front];
  front++;
  count--;

  return dequeued;
}

int RawPointerQueue::peek() {
  if (isEmpty()) {
    throw "Cannot .peek(), queue is empty";
  }

  return queue[front];
}

bool RawPointerQueue::isEmpty() { return count == 0; }

bool RawPointerQueue::isFull() { return count == capacity; }

int RawPointerQueue::size() { return count; }

void RawPointerQueue::resize(int newCapacity) {
  int *newQueue = new int[newCapacity];

  for (int i = 0; i < count; i++) {
    newQueue[i] = queue[front + i];
  }

  queue = newQueue;
  capacity = newCapacity;
  front = 0;
  rear = count - 1;
}
