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
        return max(dfs(root.left) + dfs(root.right), self.diameterOfBinaryTree(root.left), self.diameterOfBinaryTree(root.right))