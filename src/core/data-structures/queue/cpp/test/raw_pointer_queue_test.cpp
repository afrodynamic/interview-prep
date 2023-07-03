#include "../src/raw_pointer_queue.h"
#include <gtest/gtest.h>

class RawPointerQueueTest : public testing::Test {
protected:
  void SetUp() override {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
  }

  void TearDown() override {}

  RawPointerQueue queue;
};

TEST_F(RawPointerQueueTest, IsEmpty) { EXPECT_FALSE(queue.isEmpty()); }

TEST_F(RawPointerQueueTest, Size) { EXPECT_EQ(queue.size(), 3); }

TEST_F(RawPointerQueueTest, EnqueueAndPeek) {
  queue.enqueue(40);
  EXPECT_EQ(queue.peek(), 10);
}

TEST_F(RawPointerQueueTest, Dequeue) {
  queue.dequeue();
  EXPECT_EQ(queue.size(), 2);
  EXPECT_EQ(queue.peek(), 20);
}

TEST_F(RawPointerQueueTest, EmptyQueue) {
  RawPointerQueue emptyQueue;

  EXPECT_TRUE(emptyQueue.isEmpty());
  EXPECT_THROW(emptyQueue.dequeue(), const char *);
  EXPECT_THROW(emptyQueue.peek(), const char *);
}

TEST_F(RawPointerQueueTest, FullQueue) {
  queue.enqueue(40);
  EXPECT_EQ(queue.size(), 4);
  EXPECT_TRUE(queue.isFull());

  queue.enqueue(50);
  EXPECT_FALSE(queue.isFull());
}

TEST_F(RawPointerQueueTest, Resize) {
  queue.enqueue(40);
  EXPECT_TRUE(queue.isFull());

  queue.enqueue(50);
  EXPECT_FALSE(queue.isFull());

  queue.enqueue(60);
  queue.enqueue(70);
  EXPECT_EQ(queue.size(), 7);
}
