class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int total = 0, cur_gas = 0, start = 0;
        for (int i = 0; i < gas.size(); ++i) {
            total += gas[i] - cost[i];
            cur_gas += gas[i] - cost[i];
            if (cur_gas < 0) {
               cur_gas = 0;
               start = i + 1;
           }
        }
        return total >= 0 ? start : -1;
    }
};