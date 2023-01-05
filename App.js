const team = {
  _players: [
    { firstName: "", lastName: "", age: 0 },
    { firstName: "", lastName: "", age: 0 },
    { firstName: "", lastName: "", age: 0 }
  ],
  _games: [
    { opponent: "", teamPoints: 0, opponentPoints: 0 },
    { opponent: "", teamPoints: 0, opponentPoints: 0 },
    { opponent: "", teamPoints: 0, opponentPoints: 0 }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    //Why is this "players", rather than _players? I decided to make this one as "_players."
    this._players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);

console.log(team._players);
console.log(team._games);