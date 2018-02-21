class CampaignsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @campaigns = Campaign.all
  end

  def new
    @campaign = Campaign.new
  end

  def create
    @campaign = Campaign.new(letter_id: params[:letter_id])
    if @campaign.save
      respond_to do |format|
        format.json { render json: @campaign.to_json }
        format.html {}
      end
    end
  end

  def show
    @campaign = Campaign.find(params[:id])

    respond_to do |format|
      format.json { render json: @campaign.to_json }
      format.html
    end
  end

  def edit
    @campaign = Campaign.find(params[:id])
  end

  def update
    campaign_params = params[:campaign]

    @campaign = Campaign.find(campaign_params[:id])
    @campaign.update(letter_id: campaign_params[:letter_id], subscriber_id: campaign_params[:subscriber_id], name: campaign_params[:campaign_name], from_address: campaign_params[:from_address], subject: campaign_params[:subject])
  end

  def destroy
    @campaign = Campaign.find(params[:id])
    @campaign.destroy
  end


  def send_campaign_mail
    @campaign = Campaign.find(params[:id])
    
    @letter = Letter.find(@campaign.letter_id)

    @subscribers = Subscriber.find(@campaign.subscriber_id).emails
    @subscribers.each do |subscriber|
      LetterMailer.send_campaign(@campaign.subject, @letter, subscriber.email_address, @campaign.from_address).deliver!
    end
  end

  private
  def campaign_params
    params.require(:campaign).permit(:id, :letter_id, :subscriber_id, :name, :from_address, :subject)
  end
end
