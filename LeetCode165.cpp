class Solution {
public:
    int compareVersion(string version1, string version2) {
        // If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.
        vector<int> v1;
        vector<int> v2;
        {
            istringstream in(version1);
            string t;
            while (getline(in, t, '.')) {
                v1.push_back(std::stoi(t));
            }
        }
        {
            istringstream in(version2);
            string t;
            while (getline(in, t, '.')) {
                v2.push_back(std::stoi(t));
            }
        }
        
        int s1 = v1.size();
        int s2 = v2.size();
        int size = (s1 > s2) ? s1 : s2;
        for (int i = 0; i < size; ++i) {
            if (i >= s1 || i >= s2) {
                if (i >= s1 && v2[i] > 0) return -1;
                else if (i >= s2 && v1[i] > 0) return 1;
                else continue;    
            }
            
            if (v1[i] > v2[i]) return 1;
            else if (v1[i] < v2[i]) return -1;
        }
        
        return 0;
    }
};