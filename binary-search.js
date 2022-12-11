* Convert Binary Search Tree to Sorted Linked List */
/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
};
var flatten = function(root) {
    if (root === null) {
        return null;
    }
    let left = flatten(root.left);
    let right = flatten(root.right);
    root.left = null;
    root.right = left;
    let curr = root;
    while (curr.right !== null) {
        curr = curr.right;
    }
    curr.right = right;
    return root;
};
var sortedListToBST = function(head) {
    let nums = [];
    while (head !== null) {
        nums.push(head.val);
        head = head.next;
    }
    return sortedArrayToBST(nums);
};
