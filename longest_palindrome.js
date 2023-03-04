var longestPalindrome = function(s) {
    const n = s.length;
    let start = 0;
    let maxLen = 0;
    
    
    for (let i = 0; i < n; i++) {
        
        let left = i;
        let right = i + 1;
        while (left >= 0 && right < n && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                maxLen = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
        
      
        left = i;
        right = i;
        while (left >= 0 && right < n && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                maxLen = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }
    
    return s.substr(start, maxLen);
};