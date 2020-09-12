class Player < ApplicationRecord
    has_and_belongs_to_many :teams

    def fullname
        firstName + ' '+  lastName
      end

end
