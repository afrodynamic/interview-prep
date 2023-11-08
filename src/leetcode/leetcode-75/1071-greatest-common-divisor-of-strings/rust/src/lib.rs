#[allow(dead_code)]
struct Solution;

impl Solution {
    fn gcd(a: usize, b: usize) -> usize {
        if b == 0 {
            a
        } else {
            Solution::gcd(b, a % b)
        }
    }

    #[allow(dead_code)]
    pub fn gcd_of_strings(str1: String, str2: String) -> String {
        if str1.is_empty() || str2.is_empty() {
            return "".to_string();
        }

        let len1 = str1.len();
        let len2 = str2.len();

        let gcd_length = Solution::gcd(len1, len2);

        let substring = &str1[0..gcd_length];

        if str1 == substring.repeat(len1 / gcd_length)
            && str2 == substring.repeat(len2 / gcd_length)
        {
            return substring.to_string();
        }

        "".to_string()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_common_factor() {
        assert_eq!(
            Solution::gcd_of_strings("abcabc".to_string(), "abc".to_string()),
            "abc"
        );
    }

    #[test]
    fn test_no_common_factor() {
        assert_eq!(
            Solution::gcd_of_strings("ab".to_string(), "cd".to_string()),
            ""
        );
    }

    #[test]
    fn test_common_factor_same_string() {
        assert_eq!(
            Solution::gcd_of_strings("abab".to_string(), "ab".to_string()),
            "ab"
        );
    }

    #[test]
    fn test_empty_strings() {
        assert_eq!(Solution::gcd_of_strings("".to_string(), "".to_string()), "");
    }
}
