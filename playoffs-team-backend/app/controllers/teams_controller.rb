class TeamsController < ApplicationController
  before_action :set_team, only: [:show, :update, :destroy]

  # GET /teams
  def index
    @teams = Team.all
    render json: @teams
  end

  # GET /teams/1
  def show
    @teams = Team.all 
    render json: @teams
    # render json: @team.players  
  end

  # POST /teams
  def create
    # byebug
    @team = Team.new(team_params)
    # @team.players.build(player_attrs)
    if @team.save
      render json: @team, status: :created, location: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /teams/1
  def destroy
    @team.destroy
  end

  private
    def set_team
      @team = Team.find(params[:id])
    end

    def team_params
      params.require(:team).permit(:name, player_ids: [])
        end
end
