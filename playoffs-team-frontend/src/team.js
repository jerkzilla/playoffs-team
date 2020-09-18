class Team {
    static all_teams = []

    constructor(name) {
   // this // the new obj
    this.name = name
    this.player_ids = []
    Team.all_teams.push(this)
    }

    addAndAssociateTeam(playerid) {
        console.log(this.player_ids.length)
        if(this.player_ids.length == 4) {
            this.player_ids.push(playerid)
          const playerObjs = this.getPlayerNames()
         const teamInfo = document.getElementById('teamInfo')
         maxTeam()

         playerObjs.forEach(player => {
             const li = document.createElement('li')
             li.innerText = player.firstName + ' ' + player.lastName
             teamInfo.appendChild(li)
             console.log('5 Players added')
            console.log(this.name)
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

    static findTeam(attr, attrVal) {
        return (this.all_teams.find(obj => {return obj[attr] === attrVal}))
        // Team.findTeam(name, team.name)
      }

     

    updateAttributes(newInfo){
        // debugger
        this.id = newInfo.id 
        this.players = []

        newInfo.players.forEach((player) => {
            // debugger
            let plObj = Player.findPlayer(player)

            if(player) {
                player
            } else {
                player = new Player(player, this)
            }
        })

    }

}
// const teamObj = new Team(data)
// Team.formatTeams