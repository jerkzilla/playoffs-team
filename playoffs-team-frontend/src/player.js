
class Player {
    static all_players = []

    constructor(firstName, lastName, id, ptsPerGame) {
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.ptsPerGame = ptsPerGame
        Player.all_players.push(this)
    }

   static fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    static displayPlayers() {
        const main = document.getElementById("main-content")
        let ul = document.getElementById('player-placeholder')
        if(ul == null){
             ul = document.createElement('ul')
            ul.id = 'player-placeholder'
        main.appendChild(ul)
      }  else {
            ul.innerHTML = ''
        }
        Player.all_players.forEach(function (element) {
            const li =document.createElement('li')
            li.innerText =  (`${element.firstName} ${element.lastName} PPG: ${element.ptsPerGame}`)
            const firstName = element.firstName
            const lastName = element.lastName 
            const id = element.id 
            const ptsPerGame = element.ptsPerGame
           
            const button = document.createElement('button')
            button.id = "add-player"
            button.innerText = "Add to Team"
            button.type = 'submit'
            button.setAttribute('data-playerId', element.id)
            li.appendChild(button)
            ul.appendChild(li) 
            
        })
        
    }

    static findPlayer(plyr) {
        return (this.all_players.find(obj => {return obj.id === plyr.id}))
      }

}