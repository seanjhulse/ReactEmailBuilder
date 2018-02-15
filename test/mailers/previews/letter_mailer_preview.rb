# Preview all emails at http://localhost:3000/rails/mailers/letter_mailer
class LetterMailerPreview < ActionMailer::Preview
  def test
    LetterMailer.test('email_content')
  end
end
