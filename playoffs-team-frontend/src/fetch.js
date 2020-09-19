function getGoodPlayers() {
  fetch(PLAYERS_URL + 'players_by_ppg/20')
  .then(function(resp) {
      resp.json()
  .then(function(arrObjs) {
      console.log(arrObjs)
      arrObjs.forEach(function (element) {
          const firstName = element.firstName
          const lastName = element.lastName 
          const id = element.id 
          const ptsPerGame = element.pts_per_game
          new Player (firstName, lastName, id, ptsPerGame)
      })
      Player.displayPlayers()
  })
})}

function getGoodPassers() {
    fetch(PLAYERS_URL + 'players_by_apg/5')
    .then(function(resp) {
        resp.json()
    .then(function(arrObjs) {
        console.log(arrObjs)
        arrObjs.forEach(function (element) {
            const firstName = element.firstName
            const lastName = element.lastName 
            const id = element.id 
            const ptsPerGame = element.pts_per_game
            const astPerGame = element.ast_per_game
            new Player (firstName, lastName, id, ptsPerGame, astPerGame)
        })
        Player.displayPlayers()
    })
  })}
  


function addTeam(configBody) {
  // debugger
  fetch(TEAMS_URL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(configBody)
  }).then(resp => {
      return resp.json()
  }).then(obj => {
      const tObj = Team.findTeam('name', obj.name)
     tObj.updateAttributes(obj)
     
      if (obj.message) {
          alert(obj.message)
      } else {
          renderAllTeams(players)
      }
  })
}

function filterPlayers(e) {
  document.getElementById('main-content').querySelectorAll('*').forEach(n => n.remove())
  fetch(PLAYERS_URL + 'players_by_position/' + e)
  .then(function(resp) {
      resp.json()
  .then(function(arrObjs) {
      console.log(arrObjs)
      arrObjs.forEach(function (element) {
          
          const firstName = element.firstName
          const lastName = element.lastName 
          const id = element.id 
          const ptsPerGame = element.pts_per_game
          new Player (firstName, lastName, id, ptsPerGame)
      })
      document.getElementById('main-content').querySelectorAll('*').forEach(n => n.remove())

      Player.displayPlayers()
  })} 
  )}





