FactoryBot.define do
  factory :history do
    user
    movie
    rental_day { Faker::Date.in_date_period }
    status { Faker::Boolean.boolean }
  end
end
