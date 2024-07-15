export const getTopCryptocurrenciesErrorMock = {
  statusCode: 400,
  message: 'BAD_REQUEST :: Symbol not found',
};

export const getCryptocurrencyMock = {
  statusCode: 200,
  message: 'Success',
  data: {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    variationInLastDay: '5.63',
    fiatSelected: 'ARS',
    fiatPrice: 85363591.5,
  },
};
