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
    this.player_ids = []
    // this.playerOne = playerOne
    // this.playerTwo = playerTwo
    // this.playerThree = playerThree
    // this.playerFour = playerFour
    // this.playerFive = playerFive
    Team.all_teams.push(this)
}
    addAndAssociateTeam(playerid) {
        // debugger
        console.log(this.player_ids.length)
        if(this.player_ids.length == 4) {
            this.player_ids.push(playerid)
          const playerObjs = this.getPlayerNames()
         const teamInfo = document.getElementById('teamInfo')
         playerObjs.forEach(player => {
             const li = document.createElement('li')
             li.innerText = player.firstName + ' ' + player.lastName
             teamInfo.appendChild(li)
         })
            
        } else {
            this.player_ids.push(playerid)
        }
        // find by or filter methods
    }

    getPlayerNames() {
        return Player.all_players.filter(player => this.player_ids.includes(`${player.id}`))
            // debugger
    }

    static formatTeams(){
        console.log('info')

    }

}
// const teamObj = new Team(data)
// Team.formatTeams