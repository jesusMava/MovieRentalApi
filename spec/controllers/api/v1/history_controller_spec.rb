require 'rails_helper'

RSpec.describe Api::V1::HistoryController, type: :controller do
  let(:histories) { create(:history) }

  describe 'GET #index' do
    it do
      get :index
      expect(response).to have_http_status(:success) 
    end

    it do
      histories = create(:history)
      get :index 
      hash_body = JSON.parse(response.body)
      expect(hash_body.first['id']).to equal(histories['user_id'])
    end
  end

  describe 'Post #get_history' do
    it do
      params = {
        history: {
          user_id: histories['user_id']
        }
      }
      should permit( :user_id).
        for(:get_history, verb: :post, params: params).
        on(:history)

      hash_body = JSON.parse(response.body)

      should respond_with(:ok)

      expect(hash_body.first['id']).to eql(histories['movie_id'])
      end
    end

    describe 'Post # change_value' do
      it do
        params = {
          movie: {
            movie_id: histories['movie_id']
          }
        }

        should permit(:movie_id).
          for(:change_value, verb: :post, params: params)
        end
      end
    end
