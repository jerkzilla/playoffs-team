const BASE_URL = "http://localhost:3000"
const TEAMS_URL = `${BASE_URL}/teams/1`
const PLAYERS_URL = `${BASE_URL}/players/`
const main = document.getElementById("main-content")

document.addEventListener("DOMContentLoaded", () => {
    // console.log(e)
    // getPlayers();
document.getElementsByTagName('form')[0].addEventListener
('submit', createTeam)
// document.getElementsByTagName('name').addEventListener
// ('submit', addPlayer) 
})

function filterPlayers(e) {
    document.getElementById('main-content').querySelectorAll('*').forEach(n => n.remove())
    fetch(PLAYERS_URL + 'players_by_position/' + e)
    .then(function(resp) {
        // debugger
        resp.json()
    .then(function(arrObjs) {
        console.log(arrObjs)
        const ul = document.createElement('ul')
        arrObjs.forEach(function (element) {
            const li =document.createElement('li')
            li.innerText =  (`${element.firstName} ${element.lastName} PPG: ${element.pts_per_game}`)
            const firstName = element.firstName
            const lastName = element.lastName 
            const id = element.id 
            const ptsPerGame = element.pts_per_game
            new Player (firstName, lastName, id, ptsPerGame)
            ul.appendChild(li)
            main.appendChild(ul) 
        })
}
    )}
    )}

function createTeam(event) {
    event.preventDefault()
    const name = document.getElementById("name").value
  const newTeam = new Team(name)
//   console.log(newTeam)
  newTeam.save
  displayTeams()
//     addPlayer('onSubmit' )
}

// function getTeams() { 
//     fetch(TEAMS_URL)
//     .then(resp => resp.json()
//     .then (teamArr => {
//         teamArr.forEach(function(obj) {
//             // const name = obj.lastName
//             // const ptsPerGame = obj.ptsPerGame
//             // const id = obj.id
//             // data = name
//             new Team(data)
//         });
//         displayTeams()
//     }))
// }

const players = []

// function addPlayersToTeam() {
//     fetch(PLAYERS_URL + '/players_by_ppg/20')
//     .then(function(resp) {
//         resp.json()
//     .then(arrObjs => {
//         arrObjs.forEach(function(obj) {
//             const firstName = obj.firstName
//             const lastName = obj.lastName 
//             const id = obj.id 
//             const ptsPerGame = obj.pts_per_game
//             new Player (firstName, lastName, id, ptsPerGame)
// //         debugger
// // const player = document.createElement('li')
// //     players.push(this)
// }
//     )})
// })}


function getPlayers() {
    // query = info["playerStatsTotals"]["stats"]["offense"]["ptsPerGame"]
    fetch(PLAYERS_URL + '/players_by_ppg/20')
    .then(function(resp) {
        resp.json()
    .then(function(arrObjs) {
        console.log(arrObjs)
        const ul = document.createElement('ul')
        arrObjs.forEach(function (element) {
            const li =document.createElement('li')
            li.innerText =  (`${element.firstName} ${element.lastName} PPG: ${element.pts_per_game}`)
            const firstName = element.firstName
            const lastName = element.lastName 
            const id = element.id 
            const ptsPerGame = element.pts_per_game
            new Player (firstName, lastName, id, ptsPerGame)
            ul.appendChild(li)
            main.appendChild(ul) 
        })
        // arrObjs.forEach(player => addPlayersToTeam(player));
    })
})}
// this will display players from each team
function displayTeams(){
    document.getElementById('main-content').querySelectorAll('*').forEach(n => n.remove())
    const ul = document.createElement('ul')
   let teamName = Team.all_teams[0].name
        const li =document.createElement('li')
        li.innerText = "Your Team: " + teamName
        ul.appendChild(li)
    main.appendChild(ul)
    getPlayers()
}


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

