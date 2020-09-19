function getGoodPlayers() {
  // query = info["playerStatsTotals"]["stats"]["offense"]["ptsPerGame"]
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
      // arrObjs.forEach(player => addPlayersToTeam(player));
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
      Player.displayPlayers()
  })} 
  )}





