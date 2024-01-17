export class Connect4 {
  private readonly rows: number = 6;
  private readonly cols: number = 7;
  private board: number[][]
  private player: number = 1;
  private gameover: boolean = false;

  constructor() {
    // Good luck
    this.player = 1
    this.board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ]
  }

  private togglePlayer(): void {
    this.player = 3 - this.player;
    
  }

  play(col: number): string {
    let result = `Player ${this.player} has a turn`;
    if (this.gameover) {
      return "Game has finished!";
    }

    if (this.isColumnFull(col)) {
      return "Column full!";
    }

    const row = this.findRowEmpty(col);
    this.board[row][col] = this.player

    if(this.isWinner(col,row)){
      this.gameover = true
      return `Player ${this.player} wins!`;
    }

    this.togglePlayer()

    return result;
  }

  //Check the column position on the firs row if is equals 0 the column is empty
  private isColumnFull(column: number): boolean {
    return this.board[0][column] !== 0;
  }

  //search by the row available
  private findRowEmpty(column: number): number {
    let row = 5
    while(this.board[row][column] != 0 && row >= 0){
      row -= 1
    }
    return row
  }

  private isWinner(column: number, row: number) : boolean {
    return this.checkColumn(column) || this.checkRow(row)
  }

  private checkRow(row: number) : boolean {
    return this.board[row].filter(c => c == this.player).length == 4
  }

  private checkColumn(column: number): boolean
  {
    return this.board.filter(c => c[column] == this.player).length == 4
  }
}