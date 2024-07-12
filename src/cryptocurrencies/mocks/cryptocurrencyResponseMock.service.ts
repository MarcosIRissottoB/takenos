import { Injectable } from '@nestjs/common';
import { CoinMarketCapCryptoCurrencyInfo } from '../interfaces/coinMarketCapCryptoCurrencyInfo.interface';

@Injectable()
export class CryptocurrencyResponseMock {
  private coinMarketCapResponseMock = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      slug: 'bitcoin',
      num_market_pairs: 11595,
      date_added: '2010-07-13T00:00:00.000Z',
      tags: [],
      max_supply: 21000000,
      circulating_supply: 19719725,
      total_supply: 19719725,
      infinite_supply: false,
      platform: null,
      cmc_rank: 1,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      tvl_ratio: null,
      last_updated: '2024-07-09T14:56:00.000Z',
      quote: {
        USD: {
          price: 57319.40397921966,
          volume_24h: 29158823298.234222,
          volume_change_24h: -20.5456,
          percent_change_1h: 0.15218575,
          percent_change_24h: 2.29106517,
          percent_change_7d: -7.40608846,
          percent_change_30d: -17.48868394,
          percent_change_60d: -5.88725612,
          percent_change_90d: -16.5300385,
          market_cap: 1130322883634.1174,
          market_cap_dominance: 53.5884,
          fully_diluted_market_cap: 1203707483563.61,
          tvl: null,
          last_updated: '2024-07-09T14:56:00.000Z',
        },
      },
    },
    {
      id: 1027,
      name: 'Ethereum',
      symbol: 'ETH',
      slug: 'ethereum',
      num_market_pairs: 9125,
      date_added: '2015-08-07T00:00:00.000Z',
      tags: [],
      max_supply: null,
      circulating_supply: 120205195.79122268,
      total_supply: 120205195.79122268,
      infinite_supply: true,
      platform: null,
      cmc_rank: 2,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      tvl_ratio: null,
      last_updated: '2024-07-09T14:55:00.000Z',
      quote: {
        USD: {
          price: 3060.4721384872787,
          volume_24h: 16942734467.112135,
          volume_change_24h: -16.2788,
          percent_change_1h: 0.08406927,
          percent_change_24h: 2.96537797,
          percent_change_7d: -10.19351701,
          percent_change_30d: -17.08183596,
          percent_change_60d: 4.27122965,
          percent_change_90d: -12.29779995,
          market_cap: 367884652620.4453,
          market_cap_dominance: 17.4398,
          fully_diluted_market_cap: 367884652620.45,
          tvl: null,
          last_updated: '2024-07-09T14:55:00.000Z',
        },
      },
    },
    {
      id: 825,
      name: 'Tether USDt',
      symbol: 'USDT',
      slug: 'tether',
      num_market_pairs: 91202,
      date_added: '2015-02-25T00:00:00.000Z',
      tags: [],
      max_supply: null,
      circulating_supply: 112207150564.85963,
      total_supply: 116076856616.98996,
      platform: {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        slug: 'ethereum',
        token_address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      },
      infinite_supply: true,
      cmc_rank: 3,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      tvl_ratio: null,
      last_updated: '2024-07-09T14:55:00.000Z',
      quote: {
        USD: {
          price: 0.9999557359515481,
          volume_24h: 56120531778.0386,
          volume_change_24h: -19.6779,
          percent_change_1h: -0.0080014,
          percent_change_24h: 0.03400807,
          percent_change_7d: 0.14310713,
          percent_change_30d: 0.00081733,
          percent_change_60d: 0.01158547,
          percent_change_90d: -0.06300489,
          market_cap: 112202183822.11038,
          market_cap_dominance: 5.3151,
          fully_diluted_market_cap: 116071718585.38,
          tvl: null,
          last_updated: '2024-07-09T14:55:00.000Z',
        },
      },
    },
    {
      id: 1839,
      name: 'BNB',
      symbol: 'BNB',
      slug: 'bnb',
      num_market_pairs: 2190,
      date_added: '2017-07-25T00:00:00.000Z',
      tags: [],
      max_supply: null,
      circulating_supply: 147582591.49366957,
      total_supply: 147582591.49366957,
      infinite_supply: false,
      platform: null,
      cmc_rank: 4,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      tvl_ratio: null,
      last_updated: '2024-07-09T14:55:00.000Z',
      quote: {
        USD: {
          price: 515.7228043290456,
          volume_24h: 1665255162.126614,
          volume_change_24h: -25.1049,
          percent_change_1h: 0.20157376,
          percent_change_24h: 2.69714833,
          percent_change_7d: -10.4527404,
          percent_change_30d: -24.15075311,
          percent_change_60d: -11.73161445,
          percent_change_90d: -12.33705882,
          market_cap: 76111707955.26323,
          market_cap_dominance: 3.6055,
          fully_diluted_market_cap: 76111707955.26,
          tvl: null,
          last_updated: '2024-07-09T14:55:00.000Z',
        },
      },
    },
    {
      id: 5426,
      name: 'Solana',
      symbol: 'SOL',
      slug: 'solana',
      num_market_pairs: 699,
      date_added: '2020-04-10T00:00:00.000Z',
      tags: [],
      max_supply: null,
      circulating_supply: 463662005.9945902,
      total_supply: 579840119.1973466,
      infinite_supply: true,
      platform: null,
      cmc_rank: 5,
      self_reported_circulating_supply: null,
      self_reported_market_cap: null,
      tvl_ratio: null,
      last_updated: '2024-07-09T14:55:00.000Z',
      quote: {
        USD: {
          price: 139.63098872155172,
          volume_24h: 2754740081.958067,
          volume_change_24h: -17.1341,
          percent_change_1h: -0.25478943,
          percent_change_24h: 1.24083582,
          percent_change_7d: -5.72404134,
          percent_change_30d: -13.40386454,
          percent_change_60d: -4.68326116,
          percent_change_90d: -17.44532679,
          market_cap: 64741584329.64267,
          market_cap_dominance: 3.0669,
          fully_diluted_market_cap: 80963649143.95,
          tvl: null,
          last_updated: '2024-07-09T14:55:00.000Z',
        },
      },
    },
  ];
  async fetchCryptocurrenciesMock(): Promise<
    CoinMarketCapCryptoCurrencyInfo[]
  > {
    return this.coinMarketCapResponseMock;
  }
}
