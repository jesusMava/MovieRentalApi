require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe 'GET #index' do
    it { expect(response).to have_http_status(:success) }

    it do
      user = create(:user)
      get :index
      hash_body = JSON.parse(response.body)
      expect(hash_body.first['name']).to eql(user['name'])
    end
  end

  describe 'Post #create' do
    it do
      user = create(:user)
      params = {
        user: {
          name: user['name'],
          email: user['email']
        }
      }
      should permit(:name, :email).
        for(:create, params: params).
        on(:user)

      should respond_with(200)
      end
    end

    it 'Do not permit create user' do
      params = {
        user: {
          name: '',
          email: ''
        }
      }
      post :create, params: params
      hash_body = JSON.parse(response.body)
      expect(hash_body['message']).to eql('Sorry something was wrong')
      expect(response).not_to have_http_status(:ok)
    end
  end
