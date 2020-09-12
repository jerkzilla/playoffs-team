const BASE_URL = 'http://localhost:3000/'

function getTeams() {
  fetch(BASE_URL + 'teams')
  // .then(function(resp){
  //   return resp.json()
  // })
  // .then(resp => {
  //   return resp.json()
  // })
  .then(resp => resp.json())
  .then(teamArr => {
    console.log(teamArr)
  })
}


function createTeam() {
  // send a post request to Rails, create a program & associate a new character
  // request is a POST, need 2 send a config obj
   fetch(BASE_URL + 'teams',{
     method: 'POST',
    
   })
   .then(resp => resp.json())
   .then(data => {
     console.log(data)
    // const pObj = Team.findTeam('title', data.title)

    // tObj.updateAttributes(data)
   })
  }