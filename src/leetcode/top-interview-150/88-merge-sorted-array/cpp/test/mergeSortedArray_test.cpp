#include <gtest/gtest.h>
#include <vector>

#include "../src/mergeSortedArray.h"

TEST(MergeSortedArray, HandlesMergingTwoSortedArrays) {
  Solution solution;
  std::vector<int> nums1 = {1, 2, 3, 0, 0, 0};
  int m = 3;
  std::vector<int> nums2 = {2, 5, 6};
  int n = 3;

  solution.merge(nums1, m, nums2, n);

  std::vector<int> expected = {1, 2, 2, 3, 5, 6};
  EXPECT_EQ(nums1, expected);
}

TEST(MergeSortedArray, HandlesMergingArrayAndEmptyArray) {
  Solution solution;
  std::vector<int> nums1 = {1};
  int m = 1;
  std::vector<int> nums2;
  int n = 0;

  solution.merge(nums1, m, nums2, n);

  std::vector<int> expected = {1};
  EXPECT_EQ(nums1, expected);
}
