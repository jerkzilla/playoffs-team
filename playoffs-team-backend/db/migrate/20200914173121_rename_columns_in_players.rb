class RenameColumnsInPlayers < ActiveRecord::Migration[6.0]
  def change
    rename_column :players, :ptsPerGame, :pts_per_game
    rename_column :players, :primaryPosition, :primary_position
  end
end
