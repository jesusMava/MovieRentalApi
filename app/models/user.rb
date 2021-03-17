class User < ApplicationRecord
  has_many :history
  has_many :movie, :through => :history
  validates :name, :email, presence: true
end
