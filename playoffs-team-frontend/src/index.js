const BASE_URL = "http://localhost:3000"
const TEAMS_URL = `${BASE_URL}/teams/`
const PLAYERS_URL = `${BASE_URL}/players/`
const main = document.getElementById("main-content")

document.addEventListener("DOMContentLoaded", () => {
document.getElementsByTagName('form')[0].addEventListener
('submit', createTeam)
})

// window.onload=function(){
//     document.getElementById("my_audio").play();
//   }

// refactor inner if block code into own function
document.addEventListener('click', function(e){
    if (e.target.matches("#add-player")){ 
        e.preventDefault()
        const teamArray = Team.all_teams
        const lastTeam = teamArray[teamArray.length - 1]
        lastTeam.addAndAssociateTeam(e.target.dataset.playerid)
         console.log(lastTeam.player_ids)
    }
    
}) 

function createTeam(event) {
    event.preventDefault()
    const name = document.getElementById("name").value
    const newTeam = new Team(name)
    console.log(Team.all)
    newTeam.save
    displayTeams()
}

function displayTeams(){
    document.getElementById('main-content').querySelectorAll('*').forEach(n => n.remove())
    document.getElementById('create-team').querySelectorAll('*').forEach(n => n.remove())
    let teamName = Team.all_teams[0].name
        const p =document.createElement('p')
        p.innerText =  " ' "+ teamName + " ' "
        main.appendChild(p)
}

const players = []

function maxTeam() {
    if (confirm("Submit Team?")) {
        console.log("Team has been submitted.")
        players.push(Team.all_teams[0].player_ids)
        players.push(Team.all_teams[0].name)
        const yourTeam = Team.all_teams[0]
        teamConfigBodyCreation(yourTeam)
 } else {
        console.log("Cancelled submit.")
      }
    }    


    function teamConfigBodyCreation(team){
        const tObjJS = Team.findTeam('name', team.name)
        const configBodyObj = {}
        configBodyObj.team = tObjJS
           addTeam(configBodyObj)
       }   

function renderAllTeams() {
    document.getElementById('main-content').querySelectorAll('*').forEach(n => n.remove())
    fetch(TEAMS_URL)
    .then(function(resp) {
        resp.json()
    .then(function(arrObjs) {
        console.log(arrObjs)
        const p = document.createElement('p')
        main.appendChild(p)
        p.innerText = "ALL TEAMS"
        arrObjs.forEach(function (element) {
            const ul = document.createElement('ul')
            const h3  =document.createElement('h6')
            ul.class = "teams"
            let teamName = element.name
            
            h3.innerText = teamName
            ul.appendChild(h3)
             
            element.players.forEach(plObj => {
                const plImg =document.createElement('img');
                plImg.setAttribute("src", `${plObj.image_url}`);
              let playerNames =  plObj.firstName + " " + plObj.lastName 
                const li =document.createElement('li')
                li.innerText = playerNames
                li.id = "player-li"
                li.appendChild(plImg)
                ul.appendChild(li)
            })     
            main.appendChild(ul)
        })})
        

      })
}


