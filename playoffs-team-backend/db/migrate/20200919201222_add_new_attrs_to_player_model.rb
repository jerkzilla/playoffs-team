class AddNewAttrsToPlayerModel < ActiveRecord::Migration[6.0]
  def change
    add_column :players, :ast_per_game, :integer
    add_column :players, :reb_per_game, :integer
    add_column :players, :fg_pct, :integer
  end
end
