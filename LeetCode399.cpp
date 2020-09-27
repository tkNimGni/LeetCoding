class Solution
{
public:
    vector<double> calcEquation(vector<vector<string>> &equations, vector<double> &values, vector<vector<string>> &queries)
    {
        vector<double> w;
        unordered_map<string, vector<pair<string, double>>> mp;
        unordered_map<string, bool> mt;

        for (int i = 0; i < equations.size(); i++)
        {
            string f1 = equations[i][0];
            string f2 = equations[i][1];
            double op = 1 / values[i];
            mp[f1].push_back({f2, values[i]});
            mp[f2].push_back({f1, op});
            mt[f1] = 0;
            mt[f2] = 0;
        }

        for (int i = 0; i < queries.size(); i++)
        {
            string f1 = queries[i][0];
            string f2 = queries[i][1];
            double m = -1;

            if (f1 != f2)
                search(mp, f1, f2, m, 1, mt);
            else if (f1 == f2 && mp.find(f1) != mp.end() && mp.find(f2) != mp.end())
                m = 1;
            w.push_back(m);
        }

        return w;
    }

private:
    void search(unordered_map<string, vector<pair<string, double>>> &mp,
                string f1, string f2, double &m, double cur, unordered_map<string, bool> mt)
    {
        if (mt[f1] == 0)
        {
            mt[f1] = 1;
            if (f1 == f2)
            {
                m = cur;
                return;
            }
            for (auto i : mp[f1])
            {
                if (mt[i.first] == 0)
                {
                    search(mp, i.first, f2, m, (cur * i.second), mt);
                }
            }
            mt[f1] = 0;
        }
    }
};