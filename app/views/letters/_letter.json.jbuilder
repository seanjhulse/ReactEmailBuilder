json.extract! letter, :id, :subject, :created_at, :updated_at
json.url letter_url(letter, format: :json)
