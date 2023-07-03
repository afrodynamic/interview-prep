#include "../src/vector_stack.h"
#include <gtest/gtest.h>

class VectorStackTest : public testing::Test {
protected:
  void SetUp() override {
    stack.push(10);
    stack.push(20);
    stack.push(30);
  }

  void TearDown() override {}

  VectorStack stack;
};

TEST_F(VectorStackTest, IsEmpty) { EXPECT_FALSE(stack.isEmpty()); }

TEST_F(VectorStackTest, Size) { EXPECT_EQ(stack.size(), 3); }

TEST_F(VectorStackTest, PushAndPeek) {
  stack.push(40);
  EXPECT_EQ(stack.peek(), 40);
}

TEST_F(VectorStackTest, Pop) {
  stack.pop();
  EXPECT_EQ(stack.size(), 2);
  EXPECT_EQ(stack.peek(), 20);
}

TEST_F(VectorStackTest, Resize) {
  stack.push(40);
  stack.push(50);
  stack.push(60);
  stack.push(70);
  EXPECT_EQ(stack.size(), 7);
}
