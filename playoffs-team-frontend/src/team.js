class Team {
    static all_teams = []

    constructor(data) {
   // this // the new obj
    this.name = data.name
    this.playerOne = data.playerOne
    this.playerTwo = data.playerTwo
    this.playerThree = data.playerThree
    this.playerFour = data.playerFour
    this.playerFive = data.playerFive
    Team.all_teams.push(this)
}

    static formatTeams(){
        console.log('info')

    }

}
// const teamObj = new Team(data)
// Team.formatTeams