class LetterMailer < ApplicationMailer
  default from: 'donotreply@wisc.edu'
  
  def test(letter, preview_address)
    @subject = letter['subject']
    @letter = letter
    
    if letter['from'].present?
      @from = letter['from']
    else
      @from = 'donotreply@wisc.edu'
    end

    mail(to: preview_address, subject: @subject, from: @from)
  end


  def send_campaign(subject, letter, to, from)
    @letter = letter
    mail(to: to, subject: subject, from: from)
  end
end
