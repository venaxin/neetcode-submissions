class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;

        const total = A.length + B.length;
        const half = Math.floor((total + 1) / 2);

        if (B.length < A.length) {
            [A, B] = [B, A];
        }

        let l = 0;
        let r = A.length;

        while (l <= r) {

            let i = l + Math.floor((r - l) / 2); // Cut in A
            let j = half - i;                    // Cut in B

            // Boundary elements (handle out-of-bounds with Infinity)
            let Aleft = i > 0 ? A[i - 1] : -Infinity;
            let Aright = i < A.length ? A[i] : Infinity;

            let Bleft = j > 0 ? B[j - 1] : -Infinity;
            let Bright = j < B.length ? B[j] : Infinity;

            // Check if partition is correct (Cross-Check)
            if (Aleft <= Bright && Bleft <= Aright) {
                
                // Odd total: Median is the max of the left side
                if (total % 2 !== 0) {
                    return Math.max(Aleft, Bleft);
                }

                // Even total: Average of the two middle elements
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
            }
            else if (Aleft > Bright) {
                // Too many elements from A in the left half, move cut left
                r = i - 1;
            } 
            else {
                // Too few elements from A in the left half, move cut right
                l = i + 1;
            }
        }


    }
}
