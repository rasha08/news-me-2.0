import { includes, get, capitalize, split, join, map, trim } from 'lodash';

export const setLikedCssClassIfNeeded = (news, likedNews) => {
  return includes(likedNews, get(news, '_id')) ? 'liked' : '';
};

export const createCategoryTitle = category =>
  'News Me: ' +
  trim(join(map(split(split(category, '-').join('/'), '/'), capitalize), ' '));
