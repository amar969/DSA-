function spiral(arr, n, m) {
  var visited = [];
  // creating nXm matrix with every element set to false
  // this visited[i][j] will indicate if cell i, j is visited or not
  for (var i = 0; i < n; i++) {
    var temp = [];
    for (var j = 0; j < m; j++) {
      temp.push(false);
    }
    visited.push(temp);
  }
  var i = 0;
  var j = 0;
  var direction = 0;
  // 0 direction moves right (j ++)
  // 1 direction moves down (i ++)
  // 2 direction moves left (j --)
  // 3 direction moves up (i --)
  while (i >= 0 && i < n && j >= 0 && j < m && visited[i][j] == false) {
    // do the following UNTIL i, j are in bounds and i, j is NOT visited
    console.log(arr[i][j]); // print current cell
    visited[i][j] = true; // mark ask visited
    if (direction == 0) {
      if (j + 1 >= m || visited[i][j + 1] == true) {
        // this is true if the next step is out of bounds or next cell is visited
        // so change direction and start moving in that direction
        direction = 1;
        i++;
      } else {
        // else continue moving in current direction
        j++;
      }
    } else if (direction == 1) {
      if (i + 1 >= n || visited[i + 1][j] == true) {
        // this is true if the next step is out of bounds or next cell is visited
        // so change direction and start moving in that direction
        direction = 2;
        j--;
      } else {
        // else continue moving in current direction
        i++;
      }
    } else if (direction == 2) {
      if (j - 1 < 0 || visited[i][j - 1] == true) {
        // this is true if the next step is out of bounds or next cell is visited
        // so change direction and start moving in that direction
        direction = 3;
        i--;
      } else {
        // else continue moving in current direction
        j--;
      }
    } else if (direction == 3) {
      if (i - 1 < 0 || visited[i - 1][j] == true) {
        // this is true if the next step is out of bounds or next cell is visited
        // so change direction and start moving in that direction
        direction = 0;
        j++;
      } else {
        // else continue moving in current direction
        i--;
      }
    }
  }
}

spiral(
    [[1,2,3],
     [4,5,6],
     [7,8,9]], 3,3
    )