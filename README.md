# playoffs-team
<<<<<<< HEAD

This app is now live: https://ecstatic-keller-52ad10.netlify.app/
=======
Site is live here:https://ecstatic-keller-52ad10.netlify.app/
>>>>>>> 283e284d0311d399b3647e7f18f9480ed06a7f54

Playoffs-Team allows users to browse current NBA postseason stats to create and compare TOP 5 lineups by category.

This app utilizes a Rails API back-end with a PostgreSQL database, as well as a Javascript front-end.

The Back-End:
Multiple endpoints were created to fetch data. Using a current NBA API as seed data, Rails is turned into its own API, accepting fetch calls that included multiple custom routes to organize and filter players and player data.

The Front-End:
The front-end uses Javascript to asynchronously make get and post requests to the API to populate the page with data and update the API. The data and functionality of the front-end was encapsulated in classes and methods.

Getting Started
To get started using this app do the following:

Clone the repository

git clone 'git@github.com:johnjamesmarshalljr/playoffs-team.git'
Navigate to the top of the 'playoffs-team' directory

cd playoffs-team-backend

Install required gem dependencies

bundle install

Start a PostgreSQL server in the PostgreSQL app

Download the app at 'https://www.postgresql.org/download/' if you don't have it

Create the database:
rake db:create

Migrate the tables:

rake db:migrate

Seed the database with brand new, up-to-date NBA stats and data:

rake db:seed

Start your rails server:

rails s

Open index.html in your browser

BLOG POST: https://johnjamesmarshalljr.medium.com/pesky-vanilla-javasc-dc754e838b2a
VIDEO WALKTHROUGH: https://youtu.be/zGiDZOdtSPw
