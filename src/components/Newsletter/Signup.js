import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <form
        action="https://tinyletter.com/tigranh"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://tinyletter.com/tigranh', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <p>
          <label for="tlemail">Enter your email address</label>
        </p>
        <p>
          <input type="text" name="email" id="tlemail" />
        </p>
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
      </form>
    );
  }
}

export default Signup;
