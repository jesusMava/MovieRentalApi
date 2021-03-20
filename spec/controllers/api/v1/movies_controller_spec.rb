require 'rails_helper'

RSpec.describe Api::V1::MoviesController, type: :controller do
  describe 'GET #index' do
    it do
      get :index
      expect(response).to have_http_status(:success)
    end

    it do
      movies = create(:movie)
      get :index 
      hash_body = JSON.parse(response.body)
      expect(hash_body.first['name']).to eql(movies['name'])
    end
  end

  describe 'Post #create' do
    let(:movie) { create(:movie) }

    it do
      params = {
        movie: {
          name: movie['name'],
          director: movie['director'],
          category: movie['category'],
          release_date: movie['release_date'],
          status: movie['status']
        }
      }
      should permit(
        :name, 
        :director,
        :category, 
        :release_date,
        :status).
        for(:create, params: params).
        on(:movie)

          should respond_with(:ok)
      end

      it 'Do not permit create movie' do
        params = {
          movie: {
            name: '',
            director: nil,
            category: movie['category'],
            release_date: movie['release_date'],
            status: movie['status']
          }
        }
        post :create, params: params
        hash_body = JSON.parse(response.body)
        expect(hash_body['message']).to eql('Sorry something was wrong')
        expect(response).not_to have_http_status(:ok)
      end
    end
  end
