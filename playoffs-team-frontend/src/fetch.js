function getGoodPlayers() {
    document.getElementById('main-content').querySelectorAll('*').forEach(n => n.remove())
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
            const astPerGame = element.ast_per_game
            const rebPerGame = element.reb_per_game
            const fgPct = element.fg_pct
            const imgUrl = element.image_url
            new Player (firstName, lastName, id, ptsPerGame, astPerGame, rebPerGame, fgPct, imgUrl)
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
            const rebPerGame = element.reb_per_game
            const fgPct = element.fg_pct
            const imgUrl = element.image_url
            new Player (firstName, lastName, id, ptsPerGame, astPerGame, rebPerGame, fgPct, imgUrl)
       
        })
        Player.displayPlayers()
    })
  })}

  function getGoodRebounders() {
    fetch(PLAYERS_URL + 'players_by_rpg/5')
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
            const rebPerGame = element.reb_per_game
            const fgPct = element.fg_pct
            const imgUrl = element.image_url
            new Player (firstName, lastName, id, ptsPerGame, astPerGame, rebPerGame, fgPct, imgUrl)
        })
        Player.displayPlayers()
    })
  })}
  
  function getEfficientShooters() {
    fetch(PLAYERS_URL + 'players_by_fgp/45')
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
            const rebPerGame = element.reb_per_game
            const fgPct = element.fg_pct
            const imgUrl = element.image_url
            new Player (firstName, lastName, id, ptsPerGame, astPerGame, rebPerGame, fgPct, imgUrl)
        })
        Player.displayPlayers()
    })
  })}

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
          const astPerGame = element.ast_per_game
          const rebPerGame = element.reb_per_game
          const fgPct = element.fg_pct
          const imgUrl = element.image_url
          new Player (firstName, lastName, id, ptsPerGame, astPerGame, rebPerGame, fgPct, imgUrl)
        })
        Player.displayPlayers()
    })} 
    )}


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




