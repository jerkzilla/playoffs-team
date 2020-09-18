class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :primary_position, :pts_per_game, :image_url
  has_many :teams

end
