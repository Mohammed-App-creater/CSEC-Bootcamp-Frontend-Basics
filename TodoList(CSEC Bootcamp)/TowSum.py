def twoSum( nums: [int], target: int) -> [int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        print(complement)
        if complement in seen:
            print([seen])
            return [seen[complement], i]
        seen[num] = i
    return []  

print(twoSum([1,2,3,4,5,6,7,8,9,10], 11)) # [0, 9]