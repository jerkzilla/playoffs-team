class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :primary_position, :pts_per_game, :image_url, :reb_per_game, :ast_per_game, :fg_pct
  has_many :teams

end
