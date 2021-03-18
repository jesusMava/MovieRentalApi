require 'rails_helper'

RSpec.describe History, type: :model do
  context 'associations and validate presence of' do
    it { should belong_to(:movie)  }
    it { should belong_to(:user)  }
    it { should validate_presence_of(:movie) }
    it { should validate_presence_of(:user) }
  end
end
