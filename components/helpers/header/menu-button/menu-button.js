const MenuButton = ({ openSideMenu }) => {
  return (
    <div className='responsive-slide-manu'>
      <span
        className='open-slide'
        id='menu-button'
        onClick={() => openSideMenu()}
      >
        <i className='fas fa-bars' />
      </span>
    </div>
  );
};

export default MenuButton;
