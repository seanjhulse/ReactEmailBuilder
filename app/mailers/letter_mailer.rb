class LetterMailer < ApplicationMailer
  default from: 'sjhulse@wisc.edu'
  
  def test(letter)
    p letter
    @letter = letter
    mail(to: 'seanjhulse@gmail.com', subject: 'Inky and React')
  end
end
