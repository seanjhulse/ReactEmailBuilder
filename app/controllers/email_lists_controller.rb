class EmailListsController < ApplicationController
  def index
    @email_lists = EmailList.all
  end

  def destroy
    @email_list = EmailList.find(params[:id])
    @email_list.destroy
  end
end
