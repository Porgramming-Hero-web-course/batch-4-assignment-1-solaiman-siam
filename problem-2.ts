{


    function removeDuplicates(nums: number[]): number[] {
       return nums.filter((item, i, a) => a.indexOf(item) === i )
    }



}