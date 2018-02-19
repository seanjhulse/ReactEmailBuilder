class CampaignsController < ApplicationController
  def index
    @campaigns = Campaign.all
  end

  def send
    @campaign = Campaign.find(params[:id])
  end
end
