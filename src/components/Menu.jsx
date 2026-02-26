import "./Menu.css";
export function Menu({theme}) {
  return (
    <>
      <div role="main" className={`menu-container ${theme}`}>
        <h1 className="title">Flavour Parade</h1>
        <div className="menu-list">
          <div className="flavour">
            <h2>Salted Caramel Pretzel</h2>
            <span>GH₵35</span>
          </div>
          <div className="flavour">
            <h2>Cherry Vanilla</h2>
            <span>GH₵45</span>
          </div>
          <div className="flavour">
            <h2>Strawberry ShortCake</h2>
            <span>GH₵40</span>
          </div>
          <div className="flavour">
            <h2>Banana Cream</h2>
            <span>GH₵30</span>
          </div>
          <div className="flavour">
            <h2>Fruity Pebble</h2>
            <span>GH₵55</span>
          </div>
          <div className="flavour">
            <h2>Oreo Cheesecake</h2>
            <span>GH₵60</span>
          </div>
          <div className="flavour">
            <h2>Mint White Chocolate</h2>
            <span>GH₵67</span>
          </div>
          <div className="flavour">
            <h2>Peanut Butter Brownie</h2>
            <span>GH₵50</span>
          </div>
        </div>
      </div>
    </>
  );
}
