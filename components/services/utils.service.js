import { includes, get } from 'lodash';

export const setLikedCssClassIfNeeded = (news, likedNews) => {
  return includes(likedNews, get(news, '_id')) ? 'liked' : '';
};
