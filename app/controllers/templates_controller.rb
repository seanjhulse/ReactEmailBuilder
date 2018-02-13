class TemplatesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_template, except: [:new, :create, :index]

  def index
    @templates = Template.all

    respond_to do |format|
      format.json { render json: @templates.to_json }
      format.html 
    end
  end

  def new
  end

  def create
    @template = Template.new(template: params[:template])

    if @template.save!
      render json: @template.to_json
    end
  end

  def show
  end

  private
  def set_template
    @template = Template.find(params[:id])
  end
end