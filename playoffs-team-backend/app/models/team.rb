class Team < ApplicationRecord
    has_and_belongs_to_many :players

    # belongs_to :first_player, class_name: "Player"
    # belongs_to :second_player, class_name: "Player"
    # belongs_to :third_player, class_name: "Player"
    # belongs_to :fourth_player, class_name: "Player"
    # belongs_to :fifth_player, class_name: "Player"

    def get_att
        self.attributes.map do |k,v| 
            self.send(k.sub("_id","").to_sym) if k.include?("_id") && k.include?("_player")
        end
    end

end
