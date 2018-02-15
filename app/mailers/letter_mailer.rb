class LetterMailer < ApplicationMailer
  default from: 'sjhulse@wisc.edu'
  
  def test(letter)
    p letter
    @letter = letter
    mail(to: 'sjhulse@wisc.edu', subject: 'Inky and React')
  end
end
