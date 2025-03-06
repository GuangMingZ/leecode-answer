/**
 * 463. 岛屿的周长
 * @param {number[][]} grid
 * @return {number}
 * 
 * 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
输出：16
解释：它的周长是上面图片中的 16 个黄色的边
示例 2：

输入：grid = [[1]]
输出：4
示例 3：

输入：grid = [[1,0]]
输出：4
 */
var islandPerimeter = function (grid) {
  let perimeter = 0;
  const rowNum = grid.length;
  const colNum = grid[0].length;
  grid.forEach((row, i) => {
    let subPerimeter = 0;
    row.forEach((col, j) => {
      if (col) {
        // 上
        if (i - 1 >= 0) {
          if (!grid[i - 1][j]) {
            subPerimeter++;
          }
        } else {
          subPerimeter++;
        }
        // 右
        if (j + 1 < colNum) {
          if (!grid[i][j + 1]) {
            subPerimeter++;
          }
        } else {
          subPerimeter++;
        }
        // 下
        if (i + 1 < rowNum) {
          if (!grid[i + 1][j]) {
            subPerimeter++;
          }
        } else {
          subPerimeter++;
        }
        // 左
        if (j - 1 >= 0) {
          if (!grid[i][j - 1]) {
            subPerimeter++;
          }
        } else {
          subPerimeter++;
        }
      }
    });
    perimeter += subPerimeter;
  });

  return perimeter;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);

console.log(islandPerimeter([[1, 0]]));

console.log(islandPerimeter([[1]]));
