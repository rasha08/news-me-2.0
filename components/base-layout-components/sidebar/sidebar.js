import { map } from 'lodash';
import Search from '../../helpers/sidebar/search/search';
import NewsSourceButton from '../../helpers/sidebar/news-source-button/news-source-button';

const Sidebar = (props) => {
  const { sources, currentCategory } = props;
  return (
      <section>
      <div className="container"> 
        <div id="sidemenu">
          <Search />
          <ul className="sidebuttons">
            {
              map(sources, source => <NewsSourceButton source={source} currentCategory={currentCategory} key={source.slug} />)
            }  
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sidebar;