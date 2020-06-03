import config from '../../config';

const withBaseUrl = (url: string): string => `${config.apiBaseUrl}${url}`;

export default {
  games: {
    upcoming: withBaseUrl('/games/upcoming'),
    get: (id: string) => withBaseUrl(`/games/${id}`),
  },
};
