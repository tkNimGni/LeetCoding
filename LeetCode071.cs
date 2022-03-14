public class Solution {
    public string SimplifyPath(string path) {
        var ans = string.Empty;
        var pwd = new Stack<string>();
        var dir = string.Empty;

        void op() {
            if (dir != string.Empty && dir != "." && dir != "..") {
                pwd.Push(dir);
            } else if (dir == ".." && pwd.Count() > 0) {
                pwd.Pop();
            }
            dir = string.Empty;
        }

        foreach (var c in path) {
            if (c == '/') {
                op();
            } else {
                dir += c;
            }
        }
        op();

        while (pwd.Count() > 0) {
            ans = $"/{pwd.Pop()}{ans}";
        }

        return ans == string.Empty ? "/" : ans;
    }
}