class Team {
    static all_teams = []
    // class & instance method
    constructor(name, players) {
      // this the the new obj
      this.name = name
      this.players = players
      // console.log(this + `inside constructor`)
      Team.all_teams.push(this)
    }
  
    static formatTeams(){
      console.log('info')
    }
  }