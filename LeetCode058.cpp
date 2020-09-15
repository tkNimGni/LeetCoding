class Solution {
public:
    int lengthOfLastWord(string s) {
        if (s.size() == 0) return 0;
        vector<string> v;
        {
            istringstream in(s);
            string t;
            while (getline(in, t, ' ')) {
                if (t != "") v.push_back(t);
            }
        }
        if (v.size() == 0) return 0;
        return v.back().size();
    }
};