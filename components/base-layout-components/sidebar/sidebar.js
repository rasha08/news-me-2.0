import { map } from 'lodash';
import Search from '../../helpers/sidebar/search/search';
import NewsSourceButton from '../../helpers/sidebar/news-source-button/news-source-button';

const getClassName = sideMenuOpen => {
  return sideMenuOpen
    ? 'open col-md-4 col-xl-3 col-lg-4 d-md-none d-lg-block'
    : 'col-md-4 col-xl-3 col-lg-4 d-md-none d-lg-block';
};

const Sidebar = ({ sources, currentCategory, sideMenuOpen }) => {
  return (
    <div className={getClassName(sideMenuOpen)} id='aside'>
      <div id='sidemenu'>
        <Search />
        <div className='col-md-12'>
          <div className='box'>
            {map(sources, source => (
              <NewsSourceButton
                source={source}
                currentCategory={currentCategory}
                key={source.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
