#[allow(dead_code)]
struct Solution;

impl Solution {
    #[allow(dead_code)]
    pub fn kids_with_candies(candies: Vec<i32>, extra_candies: i32) -> Vec<bool> {
        let max_candy_count = candies.iter().max().cloned().unwrap_or(0);

        let result: Vec<bool> = candies
            .iter()
            .map(|&kid_candies| kid_candies + extra_candies >= max_candy_count)
            .collect();

        result
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_kids_with_candies_all_true() {
        let candies = vec![2, 3, 5, 1, 4];
        let extra_candies = 4;
        let expected = vec![true, true, true, true, true];
        let result = Solution::kids_with_candies(candies, extra_candies);
        assert_eq!(result, expected);
    }

    #[test]
    fn test_kids_with_candies_some_false() {
        let candies = vec![2, 3, 5, 1, 4];
        let extra_candies = 1;
        let expected = vec![false, false, true, false, true];
        let result = Solution::kids_with_candies(candies, extra_candies);
        assert_eq!(result, expected);
    }

    #[test]
    fn test_kids_with_candies_empty() {
        let candies: Vec<i32> = vec![];
        let extra_candies = 1;
        let expected: Vec<bool> = vec![];
        let result = Solution::kids_with_candies(candies, extra_candies);
        assert_eq!(result, expected);
    }

    #[test]
    fn test_kids_with_candies_single_element() {
        let candies = vec![5];
        let extra_candies = 3;
        let expected = vec![true];
        let result = Solution::kids_with_candies(candies, extra_candies);
        assert_eq!(result, expected);
    }
}
