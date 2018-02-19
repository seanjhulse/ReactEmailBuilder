class HomeController < ApplicationController
  def index
    @letters = Letter.all
  end
end
