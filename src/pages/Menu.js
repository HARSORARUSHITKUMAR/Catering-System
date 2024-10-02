import React from "react";

const Menu = () => {
    return (
        <div className="about-container">
            <div>
                <h1 className="menu-h1">Our Menu</h1><br />
                <h4 className="menu-h4-1">Bread Basket</h4>
                <p className="menu-p-1">Assortment of fresh baked fruit breads and muffins 5.50</p><br />

                <h4 className="menu-h4-2">Honey Almond Granola with Fruits</h4>
                <p className="menu-p-2">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />

                <h4 className="menu-h4-3">Belgian Waffle</h4>
                <p className="menu-p-3">Vanilla flavored batter with malted flour 7.50</p><br />

                <h4 className="menu-h4-4">Scrambled eggs</h4>
                <p className="menu-p-4">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />

                <h4 className="menu-h4-5">Blueberry Pancakes</h4>
                <p className="menu-p-5">With syrup, butter and lots of berries 8.50</p>
            </div>

            <div>
                <img
                    className="menu-image"
                    src="images/tablesetting.jpg" 
                    alt="Not Found" 
                    style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    )
};
export default Menu;