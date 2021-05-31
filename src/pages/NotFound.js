import React from 'react';

function NotFound() {
    return (
        <div className="not-found">
            <img src={`${process.env.PUBLIC_URL}/img/overlays/404-Page.jpg`} alt="" />
        </div>
    );
}

export default NotFound;