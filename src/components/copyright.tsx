import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/pro-solid-svg-icons';

const Copyright = () => {

    return (
        <div className="copyright">
            <p><FontAwesomeIcon icon={faCopyright} /> <a href="https://www.dramate.co.uk" className="logo-text"><span>dra</span>mate</a> 2022 | Created by <a href="https://www.tabithariley.co.uk">Tabitha Riley</a> </p>
        </div>
    )
};

export default Copyright;