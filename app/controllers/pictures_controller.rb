class PicturesController < ApplicationController
  def index
  end

  def destroy
    @picture = Picture.find(params[:id])
    @id = @picture.id
    @picture.destroy
  end
end
