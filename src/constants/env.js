const isDevelopment = process.env.NODE_ENV === 'development';

export const ENV = isDevelopment
  ? {
      baseUrl: 'https://omgvamp-hearthstone-v1.p.rapidapi.com',
      rapidApi: '7590abf17fmsh6aa191259a8cc7ep107a7djsnd7b8d128743f',
      rapidApiHost: 'omgvamp-hearthstone-v1.p.rapidapi.com',
    }
  : {
      baseUrl: 'https://omgvamp-hearthstone-v1.p.rapidapi.com',
      rapidApiKey: '7590abf17fmsh6aa191259a8cc7ep107a7djsnd7b8d128743f',
      rapidApiHost: 'omgvamp-hearthstone-v1.p.rapidapi.com',
    };
