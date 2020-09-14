Rails.application.routes.draw do
  resources :teams
  resources :players
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "players/players_by_ppg/:ppg_num", to: "players#players_by_ppg"


end
