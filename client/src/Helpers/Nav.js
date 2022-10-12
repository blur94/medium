import React from 'react';
import logo from '../assets/image/logo.svg'
import home from '../assets/image/home.svg';
import notifications from '../assets/image/notifications.svg';
import lists from '../assets/image/lists.svg';
import stories from '../assets/image/stories.svg';
import write from '../assets/image/write.svg';

export default function Nav() {
    return (
        <div className='nav-container'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='navbar'>
                <ul>
                    <li>
                        <img src={home} alt='' />
                    </li>
                    <li>
                        <img src={notifications} alt='' />
                    </li>
                    <li>
                        <img src={lists} alt='' />
                    </li>
                    <li>
                        <img src={stories} alt='' />
                    </li>
                    <li className='border'>

                    </li>
                    <li>
                        <img src={write} alt='' />
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </div>
    );
}
