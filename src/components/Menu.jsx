import React, { useState } from 'react';

function Navbar() {
    // Define a state variable "openMenu" and a function "setOpenMenu" to update its value
    const [openMenu, setOpenMenu] = useState(false);

    // Function to toggle the state of the menu (open/close)
    const toggleMenu = () => {
       
        setOpenMenu(prevState => !prevState); // Toggles the value of openMenu
        console.log(prevState);
    };

    return (
        <nav>
            {/* Button to toggle the menu */}
            <button onClick={toggleMenu}>Toggle Menu</button>

            {/* Render the menu conditionally based on the value of openMenu */}
            {openMenu && (
                <div className="menu">
                    <ul>
                        <li>Menu Item 1</li>
                        <li>Menu Item 2</li>
                        <li>Menu Item 3</li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
