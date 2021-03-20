FactoryBot.define do
  factory :movie do
    name { Faker::Name.name }
    director { Faker::Name.name }
    category { Faker::Movie.quote } # we put quote cause Faker doesn't have a category part, 
    release_date { Faker::Date.in_date_period }
    status { Faker::Boolean.boolean }
  end
end
