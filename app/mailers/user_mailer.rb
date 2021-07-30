class UserMailer < ApplicationMailer
  default from: 'notifications@exmaple.com'

  def welcome_email
    @user = params[:user]
    @url = 'http://example.com/login'
    attachments['bb.png'] = File.read('app/assets/images/bb.png')
    mail to: @user.email, subject: 'Welcome to My Awesome Site'
    # show the name of the person instead of just their email address when they receive the emai
    # mail(
    #   to: email_address_with_name(@user.email, @user.name),
    #   subject: 'Welcome to My Awesome Site'
    # )
  end

end
