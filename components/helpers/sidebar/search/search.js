import { trim, isEmpty, escape, toLower, kebabCase, gt, get } from 'lodash';

const Search = () => {
  const validateSearchAndGo = (event) => {
    const { value } = event.target;
    if (event.key == 'Enter' && !isEmpty(trim(value)) && gt(get(value, 'length'), 2)) {
      window.location.href = '/today-news/search/' + kebabCase(toLower(escape(value)))
    }
  }

  return (
    <div className="search-box">
      <input
        className="search-bar"
        type="text"
        placeholder="Search.."
        onKeyPress={$event => validateSearchAndGo($event)}
      />
    </div>
  )
}

export default Search;