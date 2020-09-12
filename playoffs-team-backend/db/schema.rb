# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_12_161159) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"



  create_table "players", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "primaryPosition"
    t.integer "ptsPerGame"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image_url"
    t.integer "team_id"
  end

  create_table "players_teams", force: :cascade do |t|
    t.integer "player_id"
    t.integer "team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "first_player_id"
    t.integer "second_player_id"
    t.integer "third_player_id"
    t.integer "fourth_player_id"
    t.integer "fifth_player_id"
  end

end
