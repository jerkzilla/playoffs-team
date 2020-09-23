class PlayersController < ApplicationController
  def players_by_ppg
    @players = Player.where("pts_per_game > ?", params[:ppg_num]).order(pts_per_game: :desc)
    render json: @players
  end

  def players_by_apg
    @players = Player.where("ast_per_game > ?", params[:apg_num]).order(ast_per_game: :desc)
    render json: @players
  end

  def players_by_rpg
    @players = Player.where("reb_per_game > ?", params[:rpg_num]).order(reb_per_game: :desc)
    render json: @players
  end

  def players_by_fgp
    @players = Player.where("fg_pct > ?", params[:fgp_num]).order(fg_pct: :desc)
    render json: @players
  end

  def players_by_position
    @players = Player.where("primary_position = ?", params[:position]).order(pts_per_game: :desc)
    render json: @players
  end 

  def index
    @players = Player.all
    render json: @players
  end

  def show
    @player = Player.find_by_id(params[:id])
    render json: @player
  end
end
