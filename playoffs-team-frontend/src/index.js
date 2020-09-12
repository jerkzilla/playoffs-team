const BASE_URL = "http://localhost:3000"
const TEAMS_URL = `${BASE_URL}/teams`
const PLAYERS_URL = `${BASE_URL}/players`
const main = document.getElementById("main-content")

document.addEventListener("DOMContentLoaded", () => {
    getTeamsData();
})


function getTeamsData() {
    fetch(TEAMS_URL).then(response => {
        return response.json()
    }).then(jsonObj => {
      // debugger
        jsonObj.forEach(team => renderTeam(team));
    })
}

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
//     e.preventDefault();

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

