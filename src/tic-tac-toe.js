class TicTacToe {
  constructor() {
    this.game = [[], [], []];
    this.x = null;
    this.o = null;
  }

  getCurrentPlayerSymbol() {
    return !this.game ? "x" : this.x > this.o ? "o" : "x";
  }

  nextTurn(rowIndex, columnIndex) {
    let symbol = this.getCurrentPlayerSymbol();
    if (!this.game[rowIndex][columnIndex]) {
      this.game[rowIndex][columnIndex] = symbol;
      this[symbol]++;
    }
  }

  isFinished() {
    return this.getWinner() || this.noMoreTurns() ? true : false;
  }

  getWinner() {
    if (this.x > this.o) {
      for (let i = 0; i <= 2; i++) {
        if (
          (this.game[i][0] &&
            this.game[i][0] === this.game[i][1] &&
            this.game[i][0] === this.game[i][2]) ||
          (this.game[0][i] &&
            this.game[0][i] === this.game[1][i] &&
            this.game[0][i] === this.game[2][i]) ||
          (this.game[0][0] &&
            this.game[0][0] === this.game[1][1] &&
            this.game[0][0] === this.game[2][2]) ||
          (this.game[0][2] &&
            this.game[0][2] === this.game[1][1] &&
            this.game[0][2] === this.game[2][0])
        ) {
          return "x";
        }
      }
      return null;
    } else {
      if (this.x === this.o) {
        for (let i = 0; i <= 2; i++) {
          if (
            (this.game[i][0] &&
              this.game[i][0] === this.game[i][1] &&
              this.game[i][0] === this.game[i][2]) ||
            (this.game[0][i] &&
              this.game[0][i] === this.game[1][i] &&
              this.game[0][i] === this.game[2][i]) ||
            (this.game[0][0] &&
              this.game[0][0] === this.game[1][1] &&
              this.game[0][0] === this.game[2][2]) ||
            (this.game[0][2] &&
              this.game[0][2] === this.game[1][1] &&
              this.game[0][2] === this.game[2][0])
          ) {
            return "o";
          }
        }
        return null;
      }
    }
  }

  noMoreTurns() {
    return this.x + this.o === 9;
  }

  isDraw() {
    if (!this.getWinner() && this.noMoreTurns()) {
      return true;
    }
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    if (rowIndex <= 2 && colIndex <= 2) {
      return !this.game[rowIndex][colIndex]
        ? null
        : this.game[rowIndex][colIndex];
    }
    return null;
  }
}

module.exports = TicTacToe;
