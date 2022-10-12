import React from 'react';
import logo from './img/logo.svg';
import home from './img/home.svg';
import notifications from './img/notifications.svg';
import lists from './img/lists.svg';
import stories from './img/stories.svg';
import write from './img/write.svg';

export default function Nav() {
    return (
        <div className='nav'>
            <div>
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
