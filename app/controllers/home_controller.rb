class HomeController < ApplicationController
  def index
    @letters = Letter.all.order('created_at DESC').paginate(:page => params[:page], :per_page => 15)
  end
end
