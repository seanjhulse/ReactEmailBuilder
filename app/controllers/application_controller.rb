class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :set_layout_vars
  layout 'uw_style/uw_style'

  def set_layout_vars
    @use_admin_bar = true
    @use_main_menu = true
    @use_login_menu = true
    @use_logout_menu = false
  end
end
