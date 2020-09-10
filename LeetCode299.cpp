class Solution {
public:
    string getHint(string secret, string guess) {
        int bull = 0, cow  = 0;
        vector<int> skeep, gkeep;

        for (int i = 0; i < guess.size(); ++i) {
            if (secret[i]  == guess[i]) {
                bull++;
            } else {
                skeep.push_back(secret[i]);
                gkeep.push_back(guess[i]);
            }
        }

        for (int j = 0; j < gkeep.size(); ++j) {
            vector<int>::iterator itr = std::find(skeep.begin(), skeep.end(), gkeep[j]);
            if (itr != skeep.cend()) {
                cow++;
                skeep[std::distance(skeep.begin(), itr)] = -1;
            }
        }

        return std::to_string(bull) + "A" + std::to_string(cow) + "B";
    }
};