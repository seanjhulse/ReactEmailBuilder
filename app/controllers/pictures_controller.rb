class PicturesController < ApplicationController
  def index
    @pictures = Picture.all
  end

  def destroy
    @picture = Picture.find(params[:id])
    @id = @picture.id
    @picture.destroy
  end
end
