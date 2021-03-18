require 'rails_helper'

RSpec.describe Movie, type: :model do
  context 'Validate model Movie' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:director) }
    it { should validate_presence_of(:category) }
    it { should validate_presence_of(:release_date) }
  end
end
