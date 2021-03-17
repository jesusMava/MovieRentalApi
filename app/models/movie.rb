class Movie < ApplicationRecord
  has_many :history
  has_many :user, :through => :history
  validates :name, :director, :category, :release_date, presence: true
end
