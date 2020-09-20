class TeamsController < ApplicationController
  before_action :set_team, only: [:show, :update, :destroy]

  def index
    @teams = Team.all
    render json: @teams
  end

  def show
    @teams = Team.all 
    render json: @teams
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      render json: @team, status: :created, location: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

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
