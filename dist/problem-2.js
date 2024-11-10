"use strict";
{
    function removeDuplicates(nums) {
        return nums.filter((item, i, a) => a.indexOf(item) === i);
    }
}
