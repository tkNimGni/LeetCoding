class Solution {
public:
    bool isRobotBounded(string instructions) {
        pair<int,int> position = { 0, 0 };
        const vector<pair<int,int>> directions = { { 0, 1 }, { -1, 0 }, { 0, -1 }, { 1, 0 } };
        int direction = 0;
        for (const auto i : instructions) {
            switch (i) {
                case 'G':
                    position.first += directions[direction].first;
                    position.second += directions[direction].second;
                    break;
                case 'L':
                    direction = (direction + 1) % 4;
                    break;
                case 'R':
                    direction = (direction + 3) % 4;
            }
        }
        return direction != 0 || (position.first == 0 && position.second == 0);
    }
};