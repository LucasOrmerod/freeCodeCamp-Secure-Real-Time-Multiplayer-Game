class Player {
  constructor({ x, y, score, id }) {
    this.x = x
    this.y = y
    this.score = score
    this.id = id
  }

  movePlayer(dir, speed) {
    switch (dir) {
      case "right":
        this.x += speed
      case "left":
        this.x -= speed
      case "up":
        this.y += speed
      case "down":
        this.y -= speed
    }
  }

  collision(item) {
    if (item.x === this.x || item.y === this.y) {
      return true;
    } else {
      return false;
    };
  }

  calculateRank(arr) {
    arr.push(this.score);
    arr.sort(function(a, b) {
      return b - a;
    });

    const rank = arr.indexOf(this.score) + 1

    return "Rank " + rank.toString() + "/" + arr.length.toString();
  }
}

export default Player;
