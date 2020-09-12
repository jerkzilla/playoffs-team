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