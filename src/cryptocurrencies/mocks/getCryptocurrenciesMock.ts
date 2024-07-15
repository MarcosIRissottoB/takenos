export const getTopCryptocurrenciesErrorMock = {
  statusCode: 500,
  message: 'INTERNAL_SERVER_ERROR :: Error fetching cryptocurrencies',
};

export const getTopCryptocurrenciesMock = {
  statusCode: 200,
  message: 'Success',
  data: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      variationInLastDay: '5.63',
      fiatSelected: 'ARS',
      fiatPrice: 85363591.5,
    },
    {
      id: 1027,
      name: 'Ethereum',
      symbol: 'ETH',
      variationInLastDay: '6.30',
      fiatSelected: 'ARS',
      fiatPrice: 4565875.5,
    },
    {
      id: 825,
      name: 'Tether USDt',
      symbol: 'USDT',
      variationInLastDay: '-0.00',
      fiatSelected: 'ARS',
      fiatPrice: 1350,
    },
    {
      id: 1839,
      name: 'BNB',
      symbol: 'BNB',
      variationInLastDay: '7.71',
      fiatSelected: 'ARS',
      fiatPrice: 778545,
    },
    {
      id: 5426,
      name: 'Solana',
      symbol: 'SOL',
      variationInLastDay: '6.58',
      fiatSelected: 'ARS',
      fiatPrice: 208467,
    },
  ],
};
