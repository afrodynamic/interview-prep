#[allow(dead_code)]
struct Solution;

impl Solution {
    #[allow(dead_code)]
    pub fn merge_alternately(word1: String, word2: String) -> String {
        let mut result = String::new();
        let mut word1_chars = word1.chars();
        let mut word2_chars = word2.chars();

        loop {
            match (word1_chars.next(), word2_chars.next()) {
                (Some(c1), Some(c2)) => {
                    result.push(c1);
                    result.push(c2);
                }
                (Some(c1), None) => result.push(c1),
                (None, Some(c2)) => result.push(c2),
                (None, None) => break,
            }
        }

        result
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn merge_alternate_equal_length_strings() {
        assert_eq!(
            Solution::merge_alternately("abc".to_string(), "pqr".to_string()),
            "apbqcr".to_string()
        );
    }

    #[test]
    fn merge_alternate_first_shorter() {
        assert_eq!(
            Solution::merge_alternately("ab".to_string(), "pqrs".to_string()),
            "apbqrs".to_string()
        );
    }

    #[test]
    fn merge_alternate_second_shorter() {
        assert_eq!(
            Solution::merge_alternately("abcd".to_string(), "pq".to_string()),
            "apbqcd".to_string()
        );
    }

    #[test]
    fn merge_alternate_first_empty() {
        assert_eq!(
            Solution::merge_alternately("".to_string(), "pqrs".to_string()),
            "pqrs".to_string()
        );
    }

    #[test]
    fn merge_alternate_second_empty() {
        assert_eq!(
            Solution::merge_alternately("abcd".to_string(), "".to_string()),
            "abcd".to_string()
        );
    }
}
