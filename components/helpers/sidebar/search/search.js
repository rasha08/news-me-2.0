import { trim, isEmpty, escape, toLower, kebabCase, gt, get } from 'lodash';
let query = ''

const Search = () => {
  const validateSearchAndGo = (event, force) => {
    const { value } = event.target;
    if (
      (event.key == 'Enter' &&
      !isEmpty(trim(value)) &&
      gt(get(value, 'length'), 2)) || force
    ) {
      if (!force) {
        query = value
      }
      window.location.href =
        '/today-news/search/' + kebabCase(toLower(escape(query)));
    } else {
      query = value
    }
  };

  return (
    <div className='col-md-12'>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Search'
          aria-label='Search'
          aria-describedby='basic-addon2'
          onKeyPress={$event => validateSearchAndGo($event)}
        />
        <div className='input-group-append'>
          <button
            type='button'
            className='button-input'
            onClick={$event => validateSearchAndGo($event, true)}
          >
            <i className='fas fa-search fa-lg' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
