import "./Menu.css";
export function Menu({theme}) {
  return (
    <>
      <div className={`menu-container ${theme}`}>
        <h1 className="menu-title">Flavour Parade</h1>
        <div className="menu-list">
          <div className="flavour">
            <h3>Salted Caramel Pretzel</h3>
            <span>GH₵35</span>
          </div>
          <div className="flavour">
            <h3>Cherry Vanilla</h3>
            <span>GH₵45</span>
          </div>
          <div className="flavour">
            <h3>Strawberry ShortCake</h3>
            <span>GH₵40</span>
          </div>
          <div className="flavour">
            <h3>Banana Cream</h3>
            <span>GH₵30</span>
          </div>
          <div className="flavour">
            <h3>Fruity Pebble</h3>
            <span>GH₵55</span>
          </div>
          <div className="flavour">
            <h3>Oreo Cheesecake</h3>
            <span>GH₵60</span>
          </div>
          <div className="flavour">
            <h3>Mint White Chocolate</h3>
            <span>GH₵67</span>
          </div>
          <div className="flavour">
            <h3>Peanut Butter Brownie</h3>
            <span>GH₵50</span>
          </div>
        </div>
      </div>
    </>
  );
}
