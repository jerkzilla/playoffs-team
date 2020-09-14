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

//   const createTeamDiv =  document.getElementById("create-team").value
//   createTeamDiv.innerHTML = `<form>` 
//   const newTeam = new Team(event)
//     addPlayer('onSubmit' )
}
 
function getTeams() { 
    // when i changed the TEAMS URL to a specific team (/1) it returns
    // the team in line with console.log team array
    fetch(TEAMS_URL)
    .then(resp => resp.json()
    .then (teamArr => {
        // console.log(teamArr)
        teamArr.forEach(function(obj) {
            // debugger
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
    document.body.innerText = ''
    const ul = document.createElement('ul')
    Team.all_teams.forEach(function(obj){
        // add sumbit as part of li
        const li =document.createElement('li')
        li.innerText = 'name: ${obj.name}'
        ul.appendChild(li)
        // debugger
    })
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

// function renderTeam(teamObj) {
//     let newDiv = document.createElement("div")
//     let newP = document.createElement("p")
//     let addBtn = document.createElement("button")
//     let newUl = document.createElement("ul")
//     newDiv.className = "card"
//     newDiv.setAttribute("data-id", teamObj.id)
//     newP.innerText = teamObj.values
//     addBtn.innerText = "Add Player"
//     addBtn.setAttribute("data-team-id", teamObj.id)
//     addBtn.addEventListener("click", addPlayer)


//     newDiv.appendChild(newP)
//     newDiv.appendChild(addBtn)
//     newDiv.appendChild(newUl)
//     main.appendChild(newDiv)

//     teamObj.players.forEach(player => renderPlayer(player));
// }

// function renderPlayer(player) {
//     let teamId = player.team_id
//     const div = document.querySelector(`div[data-id='${teamId}']`)
//     const ul = div.getElementsByTagName("ul")[0]
//     let li = document.createElement("li")
//     let btn = document.createElement("button")
//     btn.className = "release"
//     btn.innerText = "Release"
//     btn.setAttribute("data-player-id", player.id)
//     btn.addEventListener("click", removePlayer)
//     li.innerText = `${player.firstName} (${player.lastName})`
//     li.appendChild(btn)
//     ul.appendChild(li)
// }



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

// function removePlayer(e) {
//     e.preventDefault();
//     e.target.parentElement.remove()
//     fetch(`http://localhost:3000/players/${ e.target.dataset.playerId }`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         }
//     })
// }