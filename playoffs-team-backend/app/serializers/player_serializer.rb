class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :primary_position, :pts_per_game, :image_url
  belongs_to :teams
  has_many :teams

end
