function solution(nums) {
    const uniqSize = new Set(nums).size;
    return nums.length / 2 > uniqSize ? uniqSize : nums.length / 2;
}