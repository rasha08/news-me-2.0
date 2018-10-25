import { filter, uniq, get, includes, isEmpty, difference } from 'lodash';
import { setKey, getKey, removeKey } from './session-storage.service';
import { submitDataToApi } from './http.service';

export const removeVisitedNews = (news, user = null) => {
  const alreadyVisitedNews = getVisitedNewsIds(user);
  if (!isEmpty(alreadyVisitedNews)) {
    return difference(
      filter(
        news,
        singleNews =>
          !includes(
            difference(alreadyVisitedNews, get(user, 'likedNews')),
            get(singleNews, '_id')
          )
      )
    );
  }

  return news;
};

export const getVisitedNewsIds = user => {
  return get(user, 'visitedNews') || getKey('visitedNews');
};

export const addNewsToVisited = (newsId, user) => {
  const action = 'addNewsToVisited';
  const userEmail = get(user, 'email');

  if (!userEmail) {
    return Promise.resolve(storeNewsIdInSessionStorage(newsId));
  }

  return submitDataToApi('newsAction', { newsId, userEmail, action })
    .then(res => {
      return addNewsToUserNews(newsId, user);
    })
    .catch(err => {
      return Promise.resolve(get(user, 'visitedNews'));
    });
};

export const getLikedNewsIds = user => {
  return get(user, 'likedNews') || getKey('likedNews');
};

export const addNewsToLiked = (newsId, user) => {
  const action = 'likeNews';
  const userEmail = get(user, 'email');

  if (!userEmail) {
    return Promise.resolve(storeNewsIdInSessionStorage(newsId, true));
  }

  return submitDataToApi('newsAction', { newsId, userEmail, action })
    .then(res => {
      return addNewsToUserNews(newsId, user, true);
    })
    .catch(err => {
      return Promise.resolve(get(user, 'likedNews'));
    });
};

const storeNewsIdInSessionStorage = (newsId, likedNewsAction = false) => {
  const key = likedNewsAction ? 'likedNews' : 'visitedNews';
  const alreadyVisitedNews = getKey(key) || [];
  alreadyVisitedNews.push(newsId);
  setKey(key, uniq(alreadyVisitedNews));

  return getKey(key);
};

export const addNewsToUserNews = (newsId, user, likedNewsAction = false) => {
  const key = likedNewsAction ? 'likedNews' : 'visitedNews';
  const alreadyVisitedNews = get(user, key);

  alreadyVisitedNews.push(newsId);
  return Promise.resolve(uniq(alreadyVisitedNews));
};
