class LettersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_letter, only: [:show, :edit, :update, :destroy]

  # GET /letters
  # GET /letters.json
  def index
    @letters = Letter.all.order('created_at DESC').paginate(:page => params[:page], :per_page => 15)

    respond_to do |format|
      format.json { render json: @letters.to_json }
      format.html
    end
  end

  # GET /letters/1
  # GET /letters/1.json
  def show
    render json: @letter
  end

  # GET /letters/new
  def new
    letter = JSON.parse(params[:template])
    @letter = Letter.create(letter: letter)
    redirect_to edit_letter_path(@letter)
  end

  # GET /letters/1/edit
  def edit
  end

  # POST /letters
  # POST /letters.json
  def create
    @letter = Letter.new(subject: params[:letter][:subject], to_address: params[:letter][:to_address], from_address: params[:letter][:from_address], preview_address: params[:letter][:preview_address], letter: params[:letter][:template][:template])

    respond_to do |format|
      if @letter.save
        format.json { render json: @letter.to_json, status: 301 }
        format.html { redirect_to :action => "edit" }
      else
        format.html { render :new }
        format.json { render json: @letter.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /letters/1
  # PATCH/PUT /letters/1.json
  def update
    respond_to do |format|
      if @letter.update(subject: params[:letter][:subject], to_address: params[:letter][:to_address], from_address: params[:letter][:from_address], preview_address: params[:letter][:preview_address], letter: params[:letter][:template][:template])
        format.html { redirect_to @letter, notice: 'Letter was successfully updated.' }
        format.json { render json: @letter, status: :ok, location: @letter }
      else
        format.html { render :edit }
        format.json { render json: @letter.errors, status: :unprocessable_entity }
      end
    end
  end

  def test_email
    @letter = OpenStruct.new(params[:letter])
    @preview_addresses = @letter['preview_address'].split(',')
    @preview_addresses.each do |preview_address|
      LetterMailer.test(@letter, preview_address).deliver!
    end
  end

  # DELETE /letters/1
  # DELETE /letters/1.json
  def destroy
    @letter.destroy
    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_letter
      @letter = Letter.find(params[:id])
    end

    def letter_params
      params.require(:letter).permit(:subject, :to_address, :from_address, :preview_address, :template, :id, :templates, :selectedPicture, :open, :rowKey, :columnKey)
    end
end
