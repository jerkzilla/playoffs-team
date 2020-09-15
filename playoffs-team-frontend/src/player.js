// problem: i dont need new PLAYERS, i have them already, so why do i need a class here?

class Player {
    static all_players = []

    constructor(firstName, lastName, id, ptsPerGame) {
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.ptsPerGame = ptsPerGame
        Player.all_players.push(this)
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}



// class Player {
    // static all_teams = []

    // constructor(data) {
   // this // the new obj
//     this.name = data.name
//     this.playerOne = data.playerOne
//     this.playerTwo = data.playerTwo
//     this.playerThree = data.playerThree
//     this.playerFour = data.playerFour
//     this.playerFive = data.playerFive
//     Team.all_teams.push(this)
// }

//     static formatTeams(){
//         console.log('info')

//     }

// }
// const teamObj = new Team(data)
// Team.formatTeams