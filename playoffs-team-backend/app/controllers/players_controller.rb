class PlayersController < ApplicationController
  # before_action :set_player, only: [:show, :update, :destroy]

  def players_by_ppg
    @players = Player.where("pts_per_game > ?", params[:ppg_num])
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
  # GET /players
  def index
    @players = Player.all

    render json: @players
  end

  # GET /players/1
  def show
    @player = Player.find_by_id(params[:id])
    render json: @player
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player
      @player = Player.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def player_params
      params.require(:player).permit(:firstName, :lastName, :primaryPosition, :ptsPerGame, :image_url, :team_id)
    end
end
