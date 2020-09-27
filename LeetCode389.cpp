class Solution {
public:
    char findTheDifference(string s, string t) {
        std::array<int, 26> ary_s; ary_s.fill(0);
        std::array<int, 26> ary_t; ary_t.fill(0);
        
        for (char c : s) {
            ++ary_s[c - 'a'];
        }
        for (char c : t) {
            ++ary_t[c - 'a'];
        }
        
        for (int i = 0; i < 26; ++i) {
            if (ary_s[i] != ary_t[i]) return (char)('a' + i);
        }
        return 'a';
    }
};