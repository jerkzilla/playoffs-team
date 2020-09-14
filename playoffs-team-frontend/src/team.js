class Team {
    static all_teams = []

    constructor(name) {
   // this // the new obj
    this.name = name
    // this.player_id = player_id
    // this.first_player_id = data.first_player_id
    // this.second_player_id = data.second_player_id
    // this.third_player_id = data.third_player_id
    // this.fourth_player_id = data.fourth_player_id
    // this.fifth_player_id = data.fifth_player_id

    // this.playerOne = data.playerOne
    // this.playerTwo = data.playerTwo
    // this.playerThree = data.playerThree
    // this.playerFour = data.playerFour
    // this.playerFive = data.playerFive
    Team.all_teams.push(this)
}

    static formatTeams(){
        console.log('info')

    }

}
// const teamObj = new Team(data)
// Team.formatTeams