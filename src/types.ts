export interface HourlyForecast {
  time: string;
  waveHeight: string;
  iconType: 'waves' | 'tsunami';
  active?: boolean;
}

export interface Beach {
  id: string;
  name: string;
  region: '강원' | '충청' | '제주' | '부산';
  address: string;
  waveHeight: string;
  wavePeriod: string;
  windSpeed: string;
  windDirection: string;
  swellDirection: string;
  swellAngle: string;
  score: number;
  statusText: '서핑 좋음' | '보통' | '잔잔함' | '서핑 나쁨';
  statusLabel: 'Good' | 'Fair' | 'Flat' | 'Poor';
  waterTemp: string;
  bgImage: string;
  detailHeroImage: string;
  recommendation: string;
  tideTime: string;
  tideHeight: string;
  sunrise: string;
  sunset: string;
  weatherStatus: '맑음' | '구름많음' | '흐림' | '비';
  hourlyForecast: HourlyForecast[];
  summaryImages: string[];
}

export type ActiveTab = 'home' | 'spot' | 'saved' | 'settings';

export const INITIAL_BEACHES: Beach[] = [
  {
    id: 'jukdo',
    name: '양양 죽도해변',
    region: '강원',
    address: '강원도 양양군 현남면',
    waveHeight: '1.2m',
    wavePeriod: '8.5s',
    windSpeed: '4m/s',
    windDirection: '북동풍',
    swellDirection: '북동',
    swellAngle: 'Direction: 45°',
    score: 82,
    statusText: '서핑 좋음',
    statusLabel: 'Good',
    waterTemp: '21°C',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgFdjQj-tx7KKSDtTIyheaDSOhLZIGrIcU8Q56eZw0ImSNCUc2nlMWqw9SojJM2dBHL2xtkIZBqnJPuF9X5weJgU7NBqgQWVesb7DhxGBS_KXNv4ZoHZvlJtkLEvZQjTCvzJoXZqs0citO2pLRRCzNra6UIi0hmmvVEXIM2bL0uOHOvUl5CeegV4ELa5FaIuhpR2PIhbhxHL_LwDr_TWohJZE0HwwF6kAdv9ha2QbsaJClUUPdxx2SXY96XmLoNl_7BFQPM54OMkQ',
    detailHeroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmBlwTyzOMv-Ze6_I_EUanI895I5-s3-A4XqM_Hzze4UDGdjoODb76hcFPEt6VOYbaFOPxjvWGbIc8hyMc8s9FthdtO0JiDTvNpNXA5rzuzppYZYgv6-5k5GbyE-N6hZvNcF2UQQNCxzMRV1c6ZRX3C3rlY2tK88ZTk5zfe0nuou6iRiToFIfafczQxPGBFUrnqP3Xg9_sePhrQAFMZvHBx2rXkBCZcxAJCcFdMB01OVLfiBJxYraqAtlEtIFcl9y-Uf4B1tk5NL8',
    recommendation: '오후 3시쯤 파도가 가장 정돈되어 들어올 것으로 보여요.',
    tideTime: '14:24',
    tideHeight: '높이 240cm',
    sunrise: '05:12',
    sunset: '19:42',
    weatherStatus: '맑음',
    hourlyForecast: [
      { time: '09:00', waveHeight: '0.8m', iconType: 'waves' },
      { time: '12:00', waveHeight: '0.9m', iconType: 'waves' },
      { time: '15:00', waveHeight: '1.2m', iconType: 'tsunami', active: true },
      { time: '18:00', waveHeight: '0.7m', iconType: 'waves' },
      { time: '21:00', waveHeight: '0.5m', iconType: 'waves' }
    ],
    summaryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgFdjQj-tx7KKSDtTIyheaDSOhLZIGrIcU8Q56eZw0ImSNCUc2nlMWqw9SojJM2dBHL2xtkIZBqnJPuF9X5weJgU7NBqgQWVesb7DhxGBS_KXNv4ZoHZvlJtkLEvZQjTCvzJoXZqs0citO2pLRRCzNra6UIi0hmmvVEXIM2bL0uOHOvUl5CeegV4ELa5FaIuhpR2PIhbhxHL_LwDr_TWohJZE0HwwF6kAdv9ha2QbsaJClUUPdxx2SXY96XmLoNl_7BFQPM54OMkQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUZMtUF_OCa_D7Wf9wUngdPP2Nq1lqW6O1TjFYXugPG8PjpVi__4-2toY1rWSEs3ElRLD0KlVITM0_Q8ogMm5SxRMOdeVf5mrLMNaIT0WXX_oHnAj0SQ5jrryDZu6rjmltrW_1a2NTkFfSGhJl7HsNzuKWAa4LbimGazRMUicRZIBobQcxq-qveuoMUsoWQ5-vDxWodV1jDtNXiOA0Pdz9BB-OOx8Yi2GDbuxWqYoh-pwEPSeeX8aRVIhT7RnhLJAgAwhiC3j2ft8',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX6tdBP9owuMbmwI8Tipcgy_DX5BSvb3DNK4H1_L7_OJhftk8cJbDAMyKoCCaEtaldDcVj6ZAQz0IqteT4gbRopGW6CkZDaChl1ffBpJamyqwMKciEHStY-1lIhOkJ7U9PiA4pgdBATPwkX4jXGGxva2FBe3dWYK_ARMXl84gqI65GcZM33lsXK3EvFY3IAwi3WszELxpPN758EsNaxME_6GSnY5EXAg9DAMMkpSXCphQ3nK6BF0wgP5rhkexSU07qyeKepTsbwfU'
    ]
  },
  {
    id: 'manripo',
    name: '만리포',
    region: '충청',
    address: '충청남도 태안군',
    waveHeight: '1.2m',
    wavePeriod: '7.8s',
    windSpeed: '3m/s',
    windDirection: '남서풍',
    swellDirection: '서',
    swellAngle: 'Direction: 270°',
    score: 75,
    statusText: '서핑 좋음',
    statusLabel: 'Good',
    waterTemp: '20°C',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC05E9ai3VGqEBUVxj3ZN0UWCa1kcqWQMPR3v5bIxFgP771cpCx6-RoaHX-4Mt1WNR-vIz8ExPhXdrlq8kIGO0xDfKvXacT4pUI0Uc8QUeXuPsi8SZUufSeBHGgbqY9qBUt0_1XLwvjbtj8srKwTL0f5gpStEVmGlpAoNdnNwwrOKgwaB1QAh37iXSyDo4VmSSU1-JKLSh2yiwD6Em5AXdpysgh7dqGm4f7iI4-1a_jMOsOTozuhNWJjKwBEkd5Yfsp4-rS_QotvIw',
    detailHeroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC05E9ai3VGqEBUVxj3ZN0UWCa1kcqWQMPR3v5bIxFgP771cpCx6-RoaHX-4Mt1WNR-vIz8ExPhXdrlq8kIGO0xDfKvXacT4pUI0Uc8QUeXuPsi8SZUufSeBHGgbqY9qBUt0_1XLwvjbtj8srKwTL0f5gpStEVmGlpAoNdnNwwrOKgwaB1QAh37iXSyDo4VmSSU1-JKLSh2yiwD6Em5AXdpysgh7dqGm4f7iI4-1a_jMOsOTozuhNWJjKwBEkd5Yfsp4-rS_QotvIw',
    recommendation: '오전 11시부터 오후 2시 사이에 완만하고 질 좋은 파도가 들어올 것으로 보여요.',
    tideTime: '11:15',
    tideHeight: '높이 410cm',
    sunrise: '05:18',
    sunset: '19:48',
    weatherStatus: '맑음',
    hourlyForecast: [
      { time: '09:00', waveHeight: '0.9m', iconType: 'waves' },
      { time: '12:00', waveHeight: '1.2m', iconType: 'tsunami', active: true },
      { time: '15:00', waveHeight: '1.0m', iconType: 'waves' },
      { time: '18:00', waveHeight: '0.8m', iconType: 'waves' },
      { time: '21:00', waveHeight: '0.6m', iconType: 'waves' }
    ],
    summaryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC05E9ai3VGqEBUVxj3ZN0UWCa1kcqWQMPR3v5bIxFgP771cpCx6-RoaHX-4Mt1WNR-vIz8ExPhXdrlq8kIGO0xDfKvXacT4pUI0Uc8QUeXuPsi8SZUufSeBHGgbqY9qBUt0_1XLwvjbtj8srKwTL0f5gpStEVmGlpAoNdnNwwrOKgwaB1QAh37iXSyDo4VmSSU1-JKLSh2yiwD6Em5AXdpysgh7dqGm4f7iI4-1a_jMOsOTozuhNWJjKwBEkd5Yfsp4-rS_QotvIw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUZMtUF_OCa_D7Wf9wUngdPP2Nq1lqW6O1TjFYXugPG8PjpVi__4-2toY1rWSEs3ElRLD0KlVITM0_Q8ogMm5SxRMOdeVf5mrLMNaIT0WXX_oHnAj0SQ5jrryDZu6rjmltrW_1a2NTkFfSGhJl7HsNzuKWAa4LbimGazRMUicRZIBobQcxq-qveuoMUsoWQ5-vDxWodV1jDtNXiOA0Pdz9BB-OOx8Yi2GDbuxWqYoh-pwEPSeeX8aRVIhT7RnhLJAgAwhiC3j2ft8',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX6tdBP9owuMbmwI8Tipcgy_DX5BSvb3DNK4H1_L7_OJhftk8cJbDAMyKoCCaEtaldDcVj6ZAQz0IqteT4gbRopGW6CkZDaChl1ffBpJamyqwMKciEHStY-1lIhOkJ7U9PiA4pgdBATPwkX4jXGGxva2FBe3dWYK_ARMXl84gqI65GcZM33lsXK3EvFY3IAwi3WszELxpPN758EsNaxME_6GSnY5EXAg9DAMMkpSXCphQ3nK6BF0wgP5rhkexSU07qyeKepTsbwfU'
    ]
  },
  {
    id: 'songjeong',
    name: '송정',
    region: '부산',
    address: '부산광역시 해운대구',
    waveHeight: '0.8m',
    wavePeriod: '6.2s',
    windSpeed: '2m/s',
    windDirection: '남풍',
    swellDirection: '남',
    swellAngle: 'Direction: 180°',
    score: 55,
    statusText: '보통',
    statusLabel: 'Fair',
    waterTemp: '22°C',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlBaR2ocRNNmL87JGB9tvNStUVcQ2iSbc3sVvo-CL5UyNoSqBox6DGsctiomH044_Ehxful84P7dLFfTFBNusfOhocSX_PWvzwZq0fh5XPTJ4wPIK6uMEpJBQYUeiHnmvFnY21xWDhWgIDdZNX51d9BVUc1hVwgh_95uKhQSltZRgT7AB3sH2i2VWNi-xiaYCOMCXzRqvcXcLsbJNWDccC5Za_Lce3OmTF1b9qA21h-kPQmrJP1km1REBeX9Zl2wn_ff925zUglzo',
    detailHeroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlBaR2ocRNNmL87JGB9tvNStUVcQ2iSbc3sVvo-CL5UyNoSqBox6DGsctiomH044_Ehxful84P7dLFfTFBNusfOhocSX_PWvzwZq0fh5XPTJ4wPIK6uMEpJBQYUeiHnmvFnY21xWDhWgIDdZNX51d9BVUc1hVwgh_95uKhQSltZRgT7AB3sH2i2VWNi-xiaYCOMCXzRqvcXcLsbJNWDccC5Za_Lce3OmTF1b9qA21h-kPQmrJP1km1REBeX9Zl2wn_ff925zUglzo',
    recommendation: '파도 크기가 작아 비기너 강습 및 롱보드 연습에 가장 추천되는 시간대입니다.',
    tideTime: '09:40',
    tideHeight: '높이 120cm',
    sunrise: '05:15',
    sunset: '19:35',
    weatherStatus: '구름많음',
    hourlyForecast: [
      { time: '09:00', waveHeight: '0.6m', iconType: 'waves' },
      { time: '12:00', waveHeight: '0.8m', iconType: 'tsunami', active: true },
      { time: '15:00', waveHeight: '0.7m', iconType: 'waves' },
      { time: '18:00', waveHeight: '0.5m', iconType: 'waves' },
      { time: '21:00', waveHeight: '0.4m', iconType: 'waves' }
    ],
    summaryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDlBaR2ocRNNmL87JGB9tvNStUVcQ2iSbc3sVvo-CL5UyNoSqBox6DGsctiomH044_Ehxful84P7dLFfTFBNusfOhocSX_PWvzwZq0fh5XPTJ4wPIK6uMEpJBQYUeiHnmvFnY21xWDhWgIDdZNX51d9BVUc1hVwgh_95uKhQSltZRgT7AB3sH2i2VWNi-xiaYCOMCXzRqvcXcLsbJNWDccC5Za_Lce3OmTF1b9qA21h-kPQmrJP1km1REBeX9Zl2wn_ff925zUglzo',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUZMtUF_OCa_D7Wf9wUngdPP2Nq1lqW6O1TjFYXugPG8PjpVi__4-2toY1rWSEs3ElRLD0KlVITM0_Q8ogMm5SxRMOdeVf5mrLMNaIT0WXX_oHnAj0SQ5jrryDZu6rjmltrW_1a2NTkFfSGhJl7HsNzuKWAa4LbimGazRMUicRZIBobQcxq-qveuoMUsoWQ5-vDxWodV1jDtNXiOA0Pdz9BB-OOx8Yi2GDbuxWqYoh-pwEPSeeX8aRVIhT7RnhLJAgAwhiC3j2ft8',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX6tdBP9owuMbmwI8Tipcgy_DX5BSvb3DNK4H1_L7_OJhftk8cJbDAMyKoCCaEtaldDcVj6ZAQz0IqteT4gbRopGW6CkZDaChl1ffBpJamyqwMKciEHStY-1lIhOkJ7U9PiA4pgdBATPwkX4jXGGxva2FBe3dWYK_ARMXl84gqI65GcZM33lsXK3EvFY3IAwi3WszELxpPN758EsNaxME_6GSnY5EXAg9DAMMkpSXCphQ3nK6BF0wgP5rhkexSU07qyeKepTsbwfU'
    ]
  },
  {
    id: 'jungmun',
    name: '제주 중문색달',
    region: '제주',
    address: '제주특별자치도 서귀포시',
    waveHeight: '0.3m',
    wavePeriod: '5.0s',
    windSpeed: '1.5m/s',
    windDirection: '동풍',
    swellDirection: '남동',
    swellAngle: 'Direction: 135°',
    score: 35,
    statusText: '잔잔함',
    statusLabel: 'Flat',
    waterTemp: '24°C',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoiFGjyhJyTxM5zP8IGTv7lUFBC5HuPHOlE56uKUSHMC-goIeULaIcjTYVYljtlDlWPyAbeeRfb-cHvNF2cV1fCnxVYsNicLcy6Rz8AA1WDOOEKf4H20iIMnLauZndDWgHe6x4eXjFLFCLqzC58NV0m6v7OutYWSwBCy3YI3RvhbiRK2vD9rKi4xTUx65HRvvbyIIziAxnaTSKRJubxamQZhN7EU9p3LjXySss5aDohg2g3r-GPNKPeBIK7YXHSPG5TFzWCsLgeUI',
    detailHeroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgG4za1nfkK1zN1d2SzFhijmFs59uLfZKsWDXmBd76JBWLQ_eB_wy3sj-epahPj74wzUuVxoMSv5SLMlHm3NiYrYsDne8TGKmsA2U4Umr8uj-vROzwwBpBYH20k8S3VWbaqlmlW2LVmAzM9NoVQ9XPfep7oV6EW1ShkjrKcsh-Peldp5B2i6j_67a77IUZ7E4xsZ_Z7_Uplp0nPUlc9V_BqdOXl8fF2LMfQSzbYUHLmz0hZ4wOe4QEhOUgXbqKaYrshMdWBJ9b674',
    recommendation: '현재 파도가 너무 잔잔하여 패들링 연습이나 물놀이에 적당하며, 서핑에는 부적합합니다.',
    tideTime: '16:10',
    tideHeight: '높이 180cm',
    sunrise: '05:25',
    sunset: '19:40',
    weatherStatus: '맑음',
    hourlyForecast: [
      { time: '09:00', waveHeight: '0.2m', iconType: 'waves' },
      { time: '12:00', waveHeight: '0.3m', iconType: 'waves', active: true },
      { time: '15:00', waveHeight: '0.3m', iconType: 'waves' },
      { time: '18:00', waveHeight: '0.2m', iconType: 'waves' },
      { time: '21:00', waveHeight: '0.1m', iconType: 'waves' }
    ],
    summaryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCoiFGjyhJyTxM5zP8IGTv7lUFBC5HuPHOlE56uKUSHMC-goIeULaIcjTYVYljtlDlWPyAbeeRfb-cHvNF2cV1fCnxVYsNicLcy6Rz8AA1WDOOEKf4H20iIMnLauZndDWgHe6x4eXjFLFCLqzC58NV0m6v7OutYWSwBCy3YI3RvhbiRK2vD9rKi4xTUx65HRvvbyIIziAxnaTSKRJubxamQZhN7EU9p3LjXySss5aDohg2g3r-GPNKPeBIK7YXHSPG5TFzWCsLgeUI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUZMtUF_OCa_D7Wf9wUngdPP2Nq1lqW6O1TjFYXugPG8PjpVi__4-2toY1rWSEs3ElRLD0KlVITM0_Q8ogMm5SxRMOdeVf5mrLMNaIT0WXX_oHnAj0SQ5jrryDZu6rjmltrW_1a2NTkFfSGhJl7HsNzuKWAa4LbimGazRMUicRZIBobQcxq-qveuoMUsoWQ5-vDxWodV1jDtNXiOA0Pdz9BB-OOx8Yi2GDbuxWqYoh-pwEPSeeX8aRVIhT7RnhLJAgAwhiC3j2ft8',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX6tdBP9owuMbmwI8Tipcgy_DX5BSvb3DNK4H1_L7_OJhftk8cJbDAMyKoCCaEtaldDcVj6ZAQz0IqteT4gbRopGW6CkZDaChl1ffBpJamyqwMKciEHStY-1lIhOkJ7U9PiA4pgdBATPwkX4jXGGxva2FBe3dWYK_ARMXl84gqI65GcZM33lsXK3EvFY3IAwi3WszELxpPN758EsNaxME_6GSnY5EXAg9DAMMkpSXCphQ3nK6BF0wgP5rhkexSU07qyeKepTsbwfU'
    ]
  },
  {
    id: 'gyeongpo',
    name: '경포',
    region: '강원',
    address: '강원도 강릉시',
    waveHeight: '1.5m',
    wavePeriod: '9.2s',
    windSpeed: '5m/s',
    windDirection: '남서풍',
    swellDirection: '북동',
    swellAngle: 'Direction: 45°',
    score: 85,
    statusText: '서핑 좋음',
    statusLabel: 'Good',
    waterTemp: '19°C',
    bgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCYtqEGjFvKN8MLojYgD2WHL5HvCKt5Z44qs8MdrfJL8V6WsvEMOY92SJDP9au0LkyK3sBxL1wUNv5XwdHFioQlz1fJIRALp8OZLvdJxUtEqv-0uCW3JGqX2xjWaVSx3MQf_3GTR1mbBtLdSqACmWbBlSxCvrl3sYfceLFZKjZn53Xg48NbHifjQjB7leYNNkAuoFHIEfHeEJio8B2cbROnoggpIGcjO1bBX4XniTNk0DtlrZvkig9wk5Y1DG0LOfQTJtORGEOG3M',
    detailHeroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCYtqEGjFvKN8MLojYgD2WHL5HvCKt5Z44qs8MdrfJL8V6WsvEMOY92SJDP9au0LkyK3sBxL1wUNv5XwdHFioQlz1fJIRALp8OZLvdJxUtEqv-0uCW3JGqX2xjWaVSx3MQf_3GTR1mbBtLdSqACmWbBlSxCvrl3sYfceLFZKjZn53Xg48NbHifjQjB7leYNNkAuoFHIEfHeEJio8B2cbROnoggpIGcjO1bBX4XniTNk0DtlrZvkig9wk5Y1DG0LOfQTJtORGEOG3M',
    recommendation: '스웰 에너지가 가장 강한 상태로, 파고가 높고 파주기도 길어 중상급 서퍼들에게 매우 우수한 서핑 기회를 선사합니다.',
    tideTime: '15:30',
    tideHeight: '높이 250cm',
    sunrise: '05:10',
    sunset: '19:41',
    weatherStatus: '맑음',
    hourlyForecast: [
      { time: '09:00', waveHeight: '1.1m', iconType: 'waves' },
      { time: '12:00', waveHeight: '1.3m', iconType: 'waves' },
      { time: '15:00', waveHeight: '1.5m', iconType: 'tsunami', active: true },
      { time: '18:00', waveHeight: '1.2m', iconType: 'waves' },
      { time: '21:00', waveHeight: '0.9m', iconType: 'waves' }
    ],
    summaryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCYtqEGjFvKN8MLojYgD2WHL5HvCKt5Z44qs8MdrfJL8V6WsvEMOY92SJDP9au0LkyK3sBxL1wUNv5XwdHFioQlz1fJIRALp8OZLvdJxUtEqv-0uCW3JGqX2xjWaVSx3MQf_3GTR1mbBtLdSqACmWbBlSxCvrl3sYfceLFZKjZn53Xg48NbHifjQjB7leYNNkAuoFHIEfHeEJio8B2cbROnoggpIGcjO1bBX4XniTNk0DtlrZvkig9wk5Y1DG0LOfQTJtORGEOG3M',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAUZMtUF_OCa_D7Wf9wUngdPP2Nq1lqW6O1TjFYXugPG8PjpVi__4-2toY1rWSEs3ElRLD0KlVITM0_Q8ogMm5SxRMOdeVf5mrLMNaIT0WXX_oHnAj0SQ5jrryDZu6rjmltrW_1a2NTkFfSGhJl7HsNzuKWAa4LbimGazRMUicRZIBobQcxq-qveuoMUsoWQ5-vDxWodV1jDtNXiOA0Pdz9BB-OOx8Yi2GDbuxWqYoh-pwEPSeeX8aRVIhT7RnhLJAgAwhiC3j2ft8',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX6tdBP9owuMbmwI8Tipcgy_DX5BSvb3DNK4H1_L7_OJhftk8cJbDAMyKoCCaEtaldDcVj6ZAQz0IqteT4gbRopGW6CkZDaChl1ffBpJamyqwMKciEHStY-1lIhOkJ7U9PiA4pgdBATPwkX4jXGGxva2FBe3dWYK_ARMXl84gqI65GcZM33lsXK3EvFY3IAwi3WszELxpPN758EsNaxME_6GSnY5EXAg9DAMMkpSXCphQ3nK6BF0wgP5rhkexSU07qyeKepTsbwfU'
    ]
  }
];
