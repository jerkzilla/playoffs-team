const BASE_URL = "http://localhost:3000"
const TEAMS_URL = `${BASE_URL}/teams/`
const PLAYERS_URL = `${BASE_URL}/players/`
const main = document.getElementById("main-content")

document.addEventListener("DOMContentLoaded", () => {
    // console.log(e)
    // getPlayers();
document.getElementsByTagName('form')[0].addEventListener
('submit', createTeam)
// on click get values of text box
// document.getElementsByTagName('name').addEventListener
// ('submit', addPlayer) 
})

// refactor inner if block code into own function
document.addEventListener('click', function(e){
    if (e.target.matches("#add-player")){ 
        e.preventDefault()
        const teamArray = Team.all_teams
        const lastTeam = teamArray[teamArray.length - 1]
        lastTeam.addAndAssociateTeam(e.target.dataset.playerid)
        //  lastTeam.player_ids.push(e.target.dataset.playerid)
        //  add or create method, call on inst.
            // debugger
            // document.getElementById("add-player").addEventListener('click', function() {
            //    debugger
            //     addPlayersToTeam()
            // })
         console.log(lastTeam.player_ids)
    }
    // addPlayersToTeam()
}) 

function maxTeam() {
    if (confirm("Submit Team?")) {
        console.log("Team has been submitted.")
        players.push(Team.all_teams[0].player_ids)
        // debugger
       addTeam(players)
      } else {
        console.log("Cancelled submit.")
      }
    }    

const players = []

function filterPlayers(e) {
    // document.getElementById('main-content').querySelectorAll('*').forEach(n => n.remove())
    fetch(PLAYERS_URL + 'players_by_position/' + e)
    .then(function(resp) {
        // debugger
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
    })} 
    )}

function createTeam(event) {
    event.preventDefault()
    const name = document.getElementById("name").value

  const newTeam = new Team(name)
  console.log(Team.all)
  newTeam.save
  displayTeams()
    // addPlayersToTeam('onSubmit')
}

function displayTeams(){
    // document.getElementById('main-content').querySelectorAll('*').forEach(n => n.remove())
    const ul = document.createElement('ul')
    // 
   let teamName = Team.all_teams[0].name
        const li =document.createElement('li')
        li.innerText = "Your Team: " + teamName
        li.id = "teamInfo"
        ul.appendChild(li)
    main.appendChild(ul)
}



// function addPlayersToTeam() {
   
    //     const ul = document.createElement('ul')
    //     debugger
    //         const li =document.createElement('li')
    //         li.innerText =  (`${element.firstName} ${element.lastName} PPG: ${element.pts_per_game}`)
    //         const firstName = element.firstName
    //         const lastName = element.lastName 
    //         const id = element.id 
    //         const ptsPerGame = element.pts_per_game
    //         new Player (firstName, lastName, id, ptsPerGame)
    //         ul.appendChild(li)
    //         main.appendChild(ul) 
    // 
// }

 

function getGoodPlayers() {
    // query = info["playerStatsTotals"]["stats"]["offense"]["ptsPerGame"]
    fetch(PLAYERS_URL + '/players_by_ppg/20')
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
// this will display players from each team
function addTeam(players) {
    fetch(TEAMS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(players)
    }).then(resp => {
        return resp.json()
    }).then(obj => {
        if (obj.message) {
            alert(obj.message)
        } else {
            displayTeams(players)
        }
    })
}

// function addPlayer(e) {
//     e.preventDefault()

//     fetch(PLAYERS_URL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({ team_id: e.target.dataset.teamId })
//     }).then(resp => {
//         return resp.json()
//     }).then(obj => {
//         if (obj.message) {
//             alert(obj.message)
//         } else {
//             renderPlayer(obj)
//         }
//     })
// }


// function getTeamsData() {
//     // fetch(TEAMS_URL).then(response => {
//     //         return response.json()
//     fetch(TEAMS_URL).then((res) => res.json())
//     .then(jsonObj => {
//       // debugger
//         jsonObj.forEach(team => renderTeam(team));
//     })
// }





// function renderPlayer(player) {
//     const li =document.createElement('li')
//             li.innerText =  (`${player.firstName} ${player.lastName} PPG: ${player.pts_per_game}`)
//             const firstName = player.firstName
//             const lastName = player.lastName 
//             const id = player.id 
//             const ptsPerGame = player.pts_per_game
//             new Player (firstName, lastName, id, ptsPerGame)
//             ul.appendChild(li)
//             main.appendChild(ul) 
//         }

