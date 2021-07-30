# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  # To see the preview of welcome_email, implement a method that has the same name and call UserMailer.welcome_email:
  def welcome_email
    UserMailer.with(user: User.first).welcome_email
  end


end
