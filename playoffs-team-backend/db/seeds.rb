# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Player.create(firstName: "JJ", lastName: "Marshall", primaryPosition: "PG", ptsPerGame: 23)
# Player.create(firstName: "Matry", lastName: "Marshall", primaryPosition: "SG", ptsPerGame: 33)
# Player.create(firstName: "Jordie", lastName: "Harris", primaryPosition: "SF", ptsPerGame: 13)
# Player.create(firstName: "Lori", lastName: "Corbell", primaryPosition: "Pf", ptsPerGame: 20)
# Player.create(firstName: "Big", lastName: "Daddy", primaryPosition: "C", ptsPerGame: 21)



# byebug
url = "http://#{ENV['API_KEY']}:MYSPORTSFEEDS@api.mysportsfeeds.com/v2.1/pull/nba/current/player_stats_totals.json"

info = HTTParty.get(url)
 
info["playerStatsTotals"].each do |p|
    firstName = p["player"]["firstName"]
    lastName = p["player"]["lastName"]
    primaryPosition = p["player"]["primaryPosition"]
    ptsPerGame = p["stats"]["offense"]["ptsPerGame"]
    image = ""

    if p["player"]["officialImageSrc"] == nil
        image = "https://ibb.co/9HVY1QD"
    else
        image = p["player"]["officialImageSrc"]
    end

    player = Player.new(
    firstName: firstName,
    lastName: lastName,
    primaryPosition: primaryPosition,
    ptsPerGame: ptsPerGame,
    image_url: image)

    player.save



end
    