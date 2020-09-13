class Team {
    static all_teams = []

    constructor(name, players) {
   // this // the new obj
    this.name = name
    this.players = players
    Team.all_teams.push(this)
}

    static formatTeams(){
        console.log('info')

    }

}
const teamObj = new Team
Team.formatTeams