class Api::V1::UsersController < ApplicationController
  def index
    @user = User.all()
    render json: @user, status: :ok
  end

  def create
    @user = User.new(user_params) 
    if(@user.save)
      render json: @user, status: :ok
    else
      render json: { message: 'Sorry something was wrong',status: 400 },
        status: 400
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end
