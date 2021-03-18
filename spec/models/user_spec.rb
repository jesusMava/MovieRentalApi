require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations fields' do
    it { should validate_presence_of(:name)  }
    it { should validate_presence_of(:email)  }
  end
end
