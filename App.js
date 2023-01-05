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
    this.players.push(player);
  }
};

team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players);

console.log(team.players);

console.log("hello");
