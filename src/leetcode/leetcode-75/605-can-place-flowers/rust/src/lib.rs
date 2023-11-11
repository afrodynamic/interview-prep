#[allow(dead_code)]
struct Solution;

impl Solution {
    #[allow(dead_code)]
    pub fn can_place_flowers(mut flowerbed: Vec<i32>, n: i32) -> bool {
        let mut n = n;
        let len = flowerbed.len();

        for i in 0..len {
            if n <= 0 {
                return true;
            }

            if flowerbed[i] == 0
                && (i == 0 || flowerbed[i - 1] == 0)
                && (i == len - 1 || flowerbed[i + 1] == 0)
            {
                flowerbed[i] = 1;
                n -= 1;
            }
        }

        n <= 0
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_can_place_flowers_case1() {
        assert!(Solution::can_place_flowers(vec![1, 0, 0, 0, 1], 1));
    }

    #[test]
    fn test_can_place_flowers_case2() {
        assert!(!Solution::can_place_flowers(vec![1, 0, 0, 0, 1], 2));
    }

    #[test]
    fn test_can_place_flowers_case3() {
        assert!(Solution::can_place_flowers(vec![0, 0, 1, 0, 1], 1));
    }

    #[test]
    fn test_can_place_flowers_case4() {
        assert!(Solution::can_place_flowers(vec![0, 0, 0, 0, 0], 3));
    }

    #[test]
    fn test_can_place_flowers_case5() {
        assert!(Solution::can_place_flowers(vec![1, 0, 0, 0, 1, 0, 0], 2));
    }
}
