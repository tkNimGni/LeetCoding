public class Solution {
    class Partition {
        public HashSet<char> alphabets;
        public int count;
        public void Merge(Partition partition) {
            foreach (var c in partition.alphabets) {
                alphabets.Add(c);
            }
            count += partition.count;
        }
    }

    public IList<int> PartitionLabels(string s) {
        var partitions = new List<Partition>();
        var appeared = new HashSet<char>();

        foreach (var c in s) {
            // Console.WriteLine($"--- char {c} ---");
            if (appeared.Contains(c)) {
                var combineIdx = -1;
                for (var i = 0; i < partitions.Count; i++) {
                    if (partitions[i].alphabets.Contains(c)) {
                        combineIdx = i;
                        partitions[i].count++;
                        break;
                    }
                }
                // Console.WriteLine($"merge: {partitions.Count} to {combineIdx}");
                while (partitions.Count - 1 > combineIdx) {
                    partitions[combineIdx].Merge(partitions[partitions.Count - 1]);
                    partitions.RemoveAt(partitions.Count - 1);
                }
                // print(s, partitions);
            } else {
                appeared.Add(c);
                partitions.Add(new Partition {
                    alphabets = new HashSet<char> { c },
                    count = 1,
                });
                // print(s, partitions);
            }
        }

        return partitions.Select(partitions => partitions.count).ToList();
    }

    void print(string s, List<Partition> partitions) {
        var str = string.Empty;
        var cnt = 0;
        var idx = 0;
        foreach (var c in s) {
            str += c;
            cnt++;
            if (idx < partitions.Count && cnt == partitions[idx].count) {
                str += ' ';
                cnt = 0;
                idx++;
            }
            if (idx == partitions.Count) {
                break;
            }
        }
        Console.WriteLine($"{partitions.Count}: [{string.Join(',', partitions.Select(p => p.count))}]\n{str}");
    }
}