class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({ length: 9 }, () => new Set());
        let cols = Array.from({ length: 9 }, () => new Set()); 
        let boxes = Array.from({ length: 9 }, () => new Set());

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let cell = board[i][j];

                if (cell === '.') continue;

                if (rows[i].has(cell)) return false;
                rows[i].add(cell);

                if (cols[j].has(cell)) return false;
                cols[j].add(cell);

                let boxIndex = (Math.floor(i / 3) * 3) + Math.floor(j / 3);
                
                if (boxes[boxIndex].has(cell)) return false;
                boxes[boxIndex].add(cell);
            }
        }
        
        return true;
    }
}