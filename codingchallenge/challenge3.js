class Team {
  constructor(name, score1, score2, score3) {
    this.name = name;
    this.score1 = score1;
    this.score2 = score2;
    this.score3 = score3;
  }

  getAvgScore() {
    return Math.round((this.score1 + this.score2 + this.score3) / 3);
  }
}

let dolphins = new Team("Dolphins", 96, 108, 89);
let koalas = new Team("Koalas", 88, 91, 110);

class Game {
  constructor(team1, team2) {
    this.team1 = team1;
    this.team2 = team2;
  }

  setAvgScore() {
    dolphins.avgScore = dolphins.getAvgScore();
    koalas.avgScore = koalas.getAvgScore();
  }

  winner() {
    if (dolphins.avgScore > koalas.avgScore) {
      return `Winners are ${dolphins.name}`;
    } else if (dolphins.avgScore === koalas.avgScore) {
      return `It's a draw`;
    } else {
      return `Winners are ${koalas.name}`;
    }
  }
}

let game = new Game(dolphins, koalas);
console.log(game.winner(game.setAvgScore()));
