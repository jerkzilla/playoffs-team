# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.create(firstName: "JJ", lastName: "Marshall", primaryPosition: "PG", ptsPerGame: 23)
Player.create(firstName: "Matry", lastName: "Marshall", primaryPosition: "SG", ptsPerGame: 33)
Player.create(firstName: "Jordie", lastName: "Harris", primaryPosition: "SF", ptsPerGame: 13)
Player.create(firstName: "Lori", lastName: "Corbell", primaryPosition: "Pf", ptsPerGame: 20)
Player.create(firstName: "Big", lastName: "Daddy", primaryPosition: "C", ptsPerGame: 21)




# url = "http://#{ENV['API_KEY']}@api.mysportsfeeds.com/v2.1/nba/current/player_stats_totals.json"
# info = HTTParty.get(url)
# def get_player_id