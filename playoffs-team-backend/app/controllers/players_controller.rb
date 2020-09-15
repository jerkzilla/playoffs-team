class PlayersController < ApplicationController
  # before_action :set_player, only: [:show, :update, :destroy]

  def players_by_ppg
    @players = Player.where("pts_per_game > ?", params[:ppg_num])
    render json: @players
  end

  def players_by_position
    @players = Player.where("primary_position = ?", params[:position])

    render json: @players
  end 
  # GET /players
  def index
    @players = Player.all

    render json: @players
  end

  # GET /players/1
  def show
    render json: @player
  end

  # POST /players
  def create
    @player = Player.new(player_params)
    #  @player.team.build 
    if @player.save
      render json: @player, status: :created, location: @player
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /players/1
  def update
    if @player.update(player_params)
      render json: @player
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  # DELETE /players/1
  def destroy
    @player.destroy
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
