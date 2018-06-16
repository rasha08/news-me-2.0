import { filter, uniq, get, includes, isEmpty } from 'lodash';
import { setKey, getKey, removeKey } from './session-storage.service';
import { submitDataToApi } from './http.service';

export const removeVisitedNews = (news, user = null) => {
  const alreadyVisitedNews = getVisitedNewsIds(user);
  console.log(alreadyVisitedNews);
  if (!isEmpty(alreadyVisitedNews)) {
    return filter(news, singleNews => !includes(alreadyVisitedNews, get(singleNews, '_id')));
  }

  return news;
}

export const getVisitedNewsIds = user => {
  return get(user, 'visitedNews') || getKey('visitedNews')
}

export const addNewsToVisited = (newsId, user) => {
  const action = 'addNewsToVisited';
  const userEmail = get(user, 'email');

  if (!userEmail) {
    return Promise.resolve(storeNewsIdInSessionStorage(newsId));
  }

  return submitDataToApi('newsAction', {newsId, userEmail, action}).then(res => {
      return addNewsToUserVisitedNews(newsId, user);
    }).catch(err => {
       return Promise.resolve(get(user, 'visitedNews'));
    });
}

const storeNewsIdInSessionStorage = newsId => {
  const alreadyVisitedNews = getKey('visitedNews') || [];
  alreadyVisitedNews.push(newsId);
  setKey('visitedNews', uniq(alreadyVisitedNews));

  return (getKey('visitedNews'));
}

export const addNewsToUserVisitedNews = (newsId, user) => {
  alreadyVisitedNews = get(user, 'visitedNews')
  alreadyVisitedNews.push(newsId);

  return Promise.resolve(alreadyVisitedNews);
}