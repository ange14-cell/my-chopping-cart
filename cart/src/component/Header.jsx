import React from 'react';


const Header = () => {
    return (
        <div className='row center block'>
            <div>
                <a href="#/"><h2>simple shopping cart</h2></a>
            </div>
            <div>
                <a href="#/cart">cart</a>
                <a href="#/signin"> sign in</a>
            </div>
            
        </div>
    );
};

export default Header;