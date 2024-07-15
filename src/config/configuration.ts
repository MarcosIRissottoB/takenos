export default () => ({
  host: process.env.HOST || '0.0.0.0',
  port: parseInt(process.env.PORT) || 8000,
  cryptocurrencyService: {
    coinMarketCapUrl: process.env.COINMARKETCAP_BASE_URL,
    apiKey: process.env.COINMARKETCAP_API_KEY,
    cryptoYaUrl: process.env.CRYPTOYA_BASE_URL,
  },
  cloudinaryService: {
    url: process.env.CLOUDINARY_BASE_URL,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    endpointUploadFile: process.env.CLOUDINARY_ENDPOINT_UPLOAD_FILE,
    apiKey: process.env.CLOUDINARY_API_KEY,
    secret: process.env.CLOUDINARY_SECRET,
  },
});
