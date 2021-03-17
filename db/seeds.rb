# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  name: "User1",
  email: 'user1@gmail.com'
)
User.create(
  name: 'User2',
  email: 'user2@gmail.com'
)

Movie.create(
  name: 'it',
  director: 'luis',
  category: 'terror',
  release_date: '2015-12-08'
)
Movie.create(
  name: 'Avengers',
  director: 'Thor',
  category: 'Action',
  release_date: '2015-11-08'
)

History.create(
  rental_day: '2015-11-08',
  status: true,
  user_id: 1,
  movie_id: 1
)

History.create(
  rental_day: '2015-11-08',
  status: true,
  user_id: 2,
  movie_id: 2
)
