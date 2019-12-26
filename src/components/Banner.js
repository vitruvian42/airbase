import React from 'react';

const Banner = () => {
  return (
    <div className="header-notify">
      <div className="notify-highlight">
          <i className="fas fa-lock"></i>
          &nbsp; Security Message &nbsp;
      </div>
      <div className="notify-message">
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.
      </div>
    </div>
  );
}

export default Banner;
