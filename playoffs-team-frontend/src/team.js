class Team {
    static all_teams = []
    constructor(name) {
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
    }

    getPlayerNames() {
        return Player.all_players.filter(player => this.player_ids.includes(`${player.id}`))
    }

    static findTeam(attr, attrVal) {
        return (this.all_teams.find(obj => {return obj[attr] === attrVal}))
      }

    updateAttributes(newInfo){
        this.id = newInfo.id 
        this.players = []
        newInfo.players.forEach((player) => {
            let plObj = Player.findPlayer(player)
            if(player) {
                player
            } else {
                player = new Player(player, this)
            }
        })

    }

}
