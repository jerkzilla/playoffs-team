const BASE_URL = "http://localhost:3000"
const TEAMS_URL = `${BASE_URL}/teams/1`
const PLAYERS_URL = `${BASE_URL}/players`
const main = document.getElementById("main-content")

document.addEventListener("DOMContentLoaded", () => {
    // console.log(e)
    getPlayers();
document.getElementsByTagName('form')[0].addEventListener
('submit', createTeam)
// document.getElementsByTagName('name').addEventListener
// ('submit', addPlayer) 
})

function createTeam(event) {
    // debugger
    event.preventDefault()
    const name = document.getElementById("name").value
  const newTeam = new Team(name)
//   console.log(newTeam)
  Team.save
  displayTeams()
//     addPlayer('onSubmit' )
}
function getTeams() { 
    fetch(TEAMS_URL)
    .then(resp => resp.json()
    .then (teamArr => {
        teamArr.forEach(function(obj) {
            const name = obj.lastName
            const ptsPerGame = obj.ptsPerGame
            const id = obj.id
            data = name
            new Team(data)
        });
        displayTeams()
    }))
}

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
            li.innerText =  (`Name: ${element.firstName} ${element.lastName} PPG: ${element.pts_per_game}`)
            ul.appendChild(li)
            main.appendChild(ul) 
        })
        // arrObjs.forEach(player => addPlayer(player));
    })
})}
// this will display players from each team
function displayTeams(){
    document.getElementById('main-content').querySelectorAll('*').forEach(n => n.remove())
    const ul = document.createElement('ul')
    // debugger
   let teamName = Team.all_teams[0].name
        const li =document.createElement('li')
        li.innerText = "Your Team: " + teamName
        ul.appendChild(li)
        // debugger
    main.appendChild(ul)
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






