class Api::V1::HistoryController < ApplicationController
  def index
    @users = User.joins(:history).group('id')
    render json: @users, status: :ok
  end

  def get_history
    @get_movies = []
    @get_data = history_params

    @history = History.select('movie_id').
      where("user_id= #{@get_data['user_id']}").group('movie_id')

    @history = @history.map{ |el| el['movie_id']}

    @get_movies = @history.map{ |id| 
      @movie = Movie.where("id = #{id}") 
    }

    render json: @get_movies.flatten, status: :ok
  end

  def change_value
    @movie = Movie.find(movie_params['movie_id'])
    @movie.status = false
    @movie.save
  end

  private
  def history_params
    params.require(:history).permit(:user_id)
  end

  def movie_params
    params.require(:movie).permit(:movie_id)
  end
end
