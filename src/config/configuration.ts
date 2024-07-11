export default () => ({
  host: process.env.HOST || '0.0.0.0',
  port: parseInt(process.env.PORT) || 8000,
  cryptocurrencyService: {
    url: process.env.COINMARKETCAP_BASE_URL,
    apiKey: process.env.COINMARKETCAP_API_KEY,
  },
});
