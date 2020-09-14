class RemoveIdsFromTeams < ActiveRecord::Migration[6.0]
  def change
    remove_column :teams, :first_player_id
    remove_column :teams, :second_player_id
    remove_column :teams, :third_player_id
    remove_column :teams, :fourth_player_id
    remove_column :teams, :fifth_player_id
  end
end
