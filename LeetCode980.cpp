class Solution
{
public:
    set<string> paths;
    int z;
    void move(int sx, int sy, int dx, int dy, vector<vector<int>> &grid, string path)
    {
        if (sx < 0 || sy < 0 || sx >= grid.size() || sy >= grid[0].size() || grid[sx][sy] == -2)
            return;
        if (sx == dx && sy == dy)
        {
            if (path.size() == z)
                paths.insert(path);
            path = "";
        }
        int temp = grid[sx][sy];
        grid[sx][sy] = -2;
        move(sx + 1, sy, dx, dy, grid, path + "D");
        move(sx - 1, sy, dx, dy, grid, path + "U");
        move(sx, sy + 1, dx, dy, grid, path + "R");
        move(sx, sy - 1, dx, dy, grid, path + "L");
        if (temp != -1)
            grid[sx][sy] = temp;
    }
    int uniquePathsIII(vector<vector<int>> &grid)
    {
        paths.clear();
        if (grid.size() < 1)
            return 0;
        int sx, sy, dx, dy;
        sx = sy = dx = dy = -1;
        z = 0;
        int block = 0;
        for (int i = 0; i < grid.size(); i++)
            for (int j = 0; j < grid[0].size(); j++)
            {
                if (grid[i][j] == 1)
                    sx = i, sy = j;
                if (grid[i][j] == 2)
                    dx = i, dy = j;
                if (grid[i][j] == -1)
                    block++;
            }

        z = grid.size() * grid[0].size() - 2;
        if (block == 0)
            z++;

        if (sx == -1 || sy == -1 || dx == -1 || dy == -1)
            return 0;
        move(sx, sy, dx, dy, grid, "");

        return paths.size();
    }
};