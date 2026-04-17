# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        def dfs(node):
            if node is None:
                return 0
            return 1 + max(dfs(node.left),dfs(node.right))
        LH = dfs(root.left)
        RH = dfs(root.right)
        LD = self.diameterOfBinaryTree(root.left)
        RD = self.diameterOfBinaryTree(root.right)

        return max(LH + RH, LD, RD)