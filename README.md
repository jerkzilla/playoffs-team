# playoffs-team
Playoffs-Team allows users to browse current NBA postseason stats to create and compare TOP 5 lineups by category.

This app utilizes a Rails API back-end with a PostgreSQL database, as well as a Javascript front-end.

The Back-End:
Multiple endpoints were created to fetch data. Using a current NBA API as seed data, Rails is turned into its own API, accepting fetch calls that included multiple custom routes to organize and filter players and player data.

The Front-End:
The front-end uses Javascript to asynchronously make get and post requests to the API to populate the page with data and update the API. The data and functionality of the front-end was encapsulated in classes and methods.

Getting Started
To get started using this app do the following:

Clone the repository

git clone 'git@github.com:jerkzilla/playoffs-team.git'
Navigate to the top of the 'playoffs-team' directory

cd playoffs-team
Install required gem dependencies

bundle install
Start a PostgreSQL server in the PostgreSQL app

Download the app at 'https://www.postgresql.org/download/' if you don't have it
Create the database
rake db:create

Migrate the tables
rake db:migrate

Seed the database with brand new, up-to-date NBA stats and data
rake db:seed

Start your rails server
rails s

Open index.html in your browser


