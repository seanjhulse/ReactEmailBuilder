class SubscribersController < ApplicationController
  before_action :set_subscriber, except: [:index, :new, :create]

  def index
    @subscribers = Subscriber.all

    respond_to do |format|
      format.json { render json: @subscribers.to_json }
      format.html
    end
  end

  def new
    @subscriber = Subscriber.new
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)
    @emails = params[:subscriber][:emails]

    # load in emails splitting them by commas
    @emails.split(',').each do |email|
      # create email object
      @email = Email.new(email_address: email)

      # append to subscriber list
      @subscriber.emails << @email
    end
    
    # save subscriber
    if @subscriber.save
      redirect_to subscribers_path
    else
      redirect_to :back
    end
  end

  def edit
  end

  def destroy
  end

  private
    def subscriber_params
      params.require(:subscriber).permit(:id, :name)
    end

    def email_params
      params.require(:subscriber).permit(:emails)
    end

    def set_subscriber
      @subscriber = Subscriber.find(params[:id])
    end
end