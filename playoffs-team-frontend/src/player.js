
class Player {
    static all_players = []

    constructor(firstName, lastName, id, ptsPerGame, astPerGame, rebPerGame, fgPct, imgUrl) {
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.ptsPerGame = ptsPerGame
        this.astPerGame = astPerGame
        this.rebPerGame = rebPerGame
        this.fgPct = fgPct
        this.imgUrl = imgUrl
        Player.all_players.push(this)
    }

   static fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    static displayPlayers() {
        document.getElementById('main-content').querySelectorAll('*').forEach(n => n.remove())
        const main = document.getElementById("main-content")
        let ul = document.getElementById('player-placeholder')
        if(ul == null){
             ul = document.createElement('ul')
             ul.class = "players"
            ul.id = 'player-placeholder'
            main.appendChild(ul)
      }  else {
            ul.innerHTML = ''

        }
        Player.all_players.forEach(function (element) {
            // debugger

            const li =document.createElement('li')
            li.innerText =  (`${element.firstName} ${element.lastName} PPG:(${element.ptsPerGame}) APG: (${element.astPerGame}) RPG (${element.rebPerGame}) FG% (${element.fgPct})`)
           
            //  element.imgUrl
            const firstName = element.firstName
            const lastName = element.lastName 
            const id = element.id 
            const ptsPerGame = element.ptsPerGame
            const astPerGame = element.astPerGame
            const rebPerGame = element.rebPerGame
            const fgPct = element.fgPct
            const imgUrl = element.imgUrl
            const button = document.createElement('button')
            
            button.id = "add-player"
            button.innerText = "Add"
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