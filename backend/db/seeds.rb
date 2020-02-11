# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User1 = User.create(name:"ray", email:"123", password: "1234")




regiment1 = Regiment.create(title:"abs", info:"do more")
regiment2 = Regiment.create(title:"running", info:"run more")
User1.regiments.push(regiment1)
User1.regiments.push(regiment2)
exercise1 = Exercise.create(name: "situps", instructions:"up and down")
regiment1.exercises.push(exercise1)
exercise2 = Exercise.create(name: "planks", instructions:"hold position for a short time")

regiment1.exercises.push(exercise2)
exercise3 = Exercise.create(name: "1 mile", instructions:"start slowly and get it done")
regiment2.exercises.push(exercise3)