module UwStyleHelper
  def uw_style_menu
    {
      admin_menu: [
        
      ],

      main_menu: [
        {
          title: 'Templates', link: '#',
          :dropdown => [
            { title: 'View All', link: templates_path },
            { title: 'New', link: new_template_path },
          ]
        },
        {
          title: 'Letters', link: '#',
          :dropdown => [
            { title: 'View All', link: letters_path },
            { title: 'New', link: new_letter_path },
          ]
        },
      ],

      footer_menu_1: {
        :menu_header => "Resources",
        :items => [
          { title: 'University Communications', link: 'https://uc.wisc.edu' },
          { title: 'Campus News Site', link: 'http://news.wisc.edu' },
          { title: 'For News Media: Working With Us', link: 'https://uc.wisc.edu/working-with-us/' }
        ]
      },

      # footer_menu_2: {
      #   :menu_header => "Footer 2",
      #   :items => [
      #     { title: 'Services', link: '#' },
      #     { title: 'Programs', link: '#' },
      #     { title: 'Resources', link: '#', active: -> { controller_name == 'users' } }
      #   ]
      # }

    }

  end

  def uw_style_css 
    stylesheet_link_tag 'uw_style/uw_style', :media => "all"
    stylesheet_link_tag 'https://fonts.googleapis.com/icon?family=Material+Icons', :media => "all"
    stylesheet_link_tag 'application', :media => "all"
  end

  def uw_style_pre_js
    javascript_include_tag 'application'
  end

  # def current_user
  #   OpenStruct.new :email => 'current@user.com'
  # end

  # def logout_path
  #   '#'
  # end
end
