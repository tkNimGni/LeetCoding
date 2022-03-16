public class Solution {
    public bool ValidateStackSequences(int[] pushed, int[] popped) {
        if (pushed.Length == 1) {
            return true;
        }

        var pushIdx = 1;
        var popIdx = 0;
        var stack = new Stack<int>();
        stack.Push(pushed[0]);

        while (pushIdx < pushed.Length || popIdx < popped.Length) {
            if (stack.Peek() == popped[popIdx]) {
                stack.Pop();
                popIdx++;
            } else if (pushIdx < pushed.Length) {
                stack.Push(pushed[pushIdx]);
                pushIdx++;
            } else {
                return false;
            }
        }

        return popIdx == popped.Length;
    }
}