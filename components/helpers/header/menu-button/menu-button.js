const MenuButton = ({openSideMenu}) => {
  return (
    <div className="responsive-slide-manu">
      <span className="open-slide" id="menu-button" onClick={() => openSideMenu()}>
      </span>
    </div>
  ); 
}

export default MenuButton;