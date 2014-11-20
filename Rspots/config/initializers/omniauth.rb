OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, process.env.RSPOTS_FB_ID, process.env.RSPOTS_FB_SECRET
end