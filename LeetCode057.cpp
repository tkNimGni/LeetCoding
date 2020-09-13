class Solution {
    enum State {
        FindBegin,  // find the begin of merge
        Merge,      // find the end of merge
        End,        // end finding, just push back
    };
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>> ans;
        State state = FindBegin;
        const auto begin = newInterval[0];
        const auto end = newInterval[1];
        
        for (auto i = 0; i < intervals.size(); ++i) {
            const int b = intervals[i][0];
            const int e = intervals[i][1];
            switch (state) {
                case FindBegin:
                    if (e >= begin) {
                        if (b > end) {
                            ans.push_back(newInterval);
                            ans.push_back({ b, e });
                        } else {
                            ans.push_back({ min(b, begin), max(e, end) });
                        }
                        state = Merge;    
                    } else {
                        ans.push_back({ b, e });
                    }
                    break;
                case Merge:
                    if (e < end) continue;
                    if (b <= end) {
                        ans.back()[1] = e;
                    } else {
                        ans.push_back({ b, e });
                    }
                    state = End;
                    break;
                case End:
                    ans.push_back({ b, e });
                    break;
            }
        }
        if (ans.empty() || state == FindBegin) ans.push_back(newInterval);
        return ans;
    }
};