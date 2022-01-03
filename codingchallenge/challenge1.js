//coding challenge 1
class BMIIndex {
  constructor(user, height, mass) {
    this.user = user;
    this.height = height;
    this.mass = mass;
  }

  calculateBMI(user, height, weight) {
    let BMI = Math.round(weight / (height * height));
    return `${user}'s BMI is ${BMI}`;
  }
}

let userOne = new BMIIndex("Mark", 1.69, 78);
let userTwo = new BMIIndex("John", 1.95, 92);
console.log(userOne.calculateBMI(userOne.user, userOne.height, userOne.mass));
console.log(userTwo.calculateBMI(userTwo.user, userTwo.height, userTwo.mass));

//coding challenge 2
let teams = [];
class Team {
  constructor(team, score1, score2, score3) {
    this.team = team;
    this.score1 = score1;
    this.score2 = score2;
    this.score3 = score3;
    teams.push({
      name: this.team,
      avgScore: this.getAvgScore(),
    });
  }

  getAvgScore() {
    let avg = Math.round((this.score1 + this.score2 + this.score3) / 3);
    return avg;
  }
}

class Winner extends Team {
  constructor(team) {
    super(team);
  }

  getWinner() {
    return teams.sort((a, b) => {
      a.avgScore > b.avgScore;
    });
  }
}

let dolphins = new Team("Dolphins", 96, 108, 89);
let koalas = new Team("Koalas", 88, 91, 110);

//fetch exercise

const whereAmI = (lat, lng) => {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then((res) =>
    res
      .json()
      .then((data) => {
        console.log(data.city, data.country);
        return data
      })
      .then((data) => console.log(data))
      .catch((err) => console.error(err.message))
  );
};

whereAmI(52.508, 13.381);
