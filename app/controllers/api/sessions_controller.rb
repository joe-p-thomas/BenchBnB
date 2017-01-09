class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credntials(username: params[:username],
                                    password: params[:password])
    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out
      render json: {}
    else
      render json: ["No current user"], status: 404
    end
  end
end
