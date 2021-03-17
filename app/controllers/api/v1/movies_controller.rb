class Api::V1::MoviesController < ApplicationController
  def index
    @movies = Movie.all()
    render json: @movies, status: :ok
  end

  def create
    @movies = Movie.new(movies_params) 
    if(@movies.save)
      render json: @movies, status: :ok
    else
      render json: { message: 'Sorry something was wrong',status: 400 },
        status: 400
    end
  end

  private
  def movies_params
    params.require(:movie).permit(
      :name, 
      :director,
      :category,
      :release_date,
      :status
    )
  end
end
