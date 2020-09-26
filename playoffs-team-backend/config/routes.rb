Rails.application.routes.draw do
  resources :teams, only: [:index, :show, :create, :destroy]
  resources :players, only: [:index, :show]
#
  get "players/players_by_ppg/:ppg_num", to: "players#players_by_ppg"
  get "players/players_by_position/:position", to: "players#players_by_position"
  get "players/players_by_apg/:apg_num", to: "players#players_by_apg"
  get "players/players_by_rpg/:rpg_num", to: "players#players_by_rpg"
  get "players/players_by_fgp/:fgp_num", to: "players#players_by_fgp"

end
