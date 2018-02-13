class MediaController < ApplicationController
  skip_before_action :verify_authenticity_token
  def upload_image
    @picture = Picture.new

    @picture.picture = params[:picture][:picture]

    respond_to do |format|
      if @picture.save!
        format.json { render json: @picture }
      end
    end
  end

  def get_images
    @pictures = Picture.all

    respond_to do |format|
      format.json { render json: @pictures }
    end
  end
end
