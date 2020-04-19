# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    hash = Hash.new()
    nums.each.with_index do |n , i|
        j = hash[target - n]
        return [j, i] if j
        hash[n] = i
    end
end

puts two_sum([1,2,3], 5)