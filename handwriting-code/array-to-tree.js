/**
 * [
  {id: 0, name: 'id-0'},
  {id: 1, name: 'id-1',pid: 0},
  {id: 2, name: 'id-2',pid: 0},
  {id: 3, name: 'id-3',pid: 1},
  {id: 4, name: 'id-4',pid: 1},
  {id: 5, name: 'id-5',pid: 1},
  {id: 6, name: 'id-6',pid: 2},
  {id: 7, name: 'id-7',pid: 2},
  {id: 8, name: 'id-8',pid: 3},
]

期望结果：
{
  {id: 0, name: 'id-0', children: [{},{},{}]}
}
 */

/**
 * 思路：采用层次遍历法，逐层构建整棵树
 * @param {*} array
 * @returns
 */
function array2Tree(array) {
  let result = {};
  const treeNodeList = [];
  // 找到根节点
  const index = array.findIndex((e) => !e.pid);
  const root = array[index];
  array.splice(index, 1);
  result = { ...root, children: [] };
  treeNodeList.push(result);
  // 还有未构建子树的节点，继续遍历
  while (treeNodeList.length) {
    const node = treeNodeList.shift();
    for (let i = array.length - 1; i >= 0; i--) {
      const temp = array[i];
      if (node.id === temp.pid) {
        if (node.children) {
          node.children.push(temp);
        } else {
          node.children = [temp];
        }
        // 当前层次节点添加到缓存队列中
        treeNodeList.push(temp);
        // 删除已经添加到树的节点，减少下一轮循环遍历次数
        array.splice(i, 1);
      }
    }
  }
  return result;
}

const data = [
  { id: 0, name: "id-0" },
  { id: 1, name: "id-1", pid: 0 },
  { id: 2, name: "id-2", pid: 0 },
  { id: 3, name: "id-3", pid: 1 },
  { id: 4, name: "id-4", pid: 1 },
  { id: 5, name: "id-5", pid: 1 },
  { id: 6, name: "id-6", pid: 2 },
  { id: 7, name: "id-7", pid: 2 },
  { id: 8, name: "id-8", pid: 3 },
];
console.log(JSON.stringify(array2Tree(data)));
