const team = {
  //1st order object.
  //Project said it should have been an array of objects. Not nested objects.
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
    //Why is this "players", rather than _players?
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