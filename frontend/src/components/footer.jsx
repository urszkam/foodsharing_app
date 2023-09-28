import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer>
                <div class="footer__main-logo">
                    <img src="../images/logo_blanc.png" alt="Le logo de Mr.Coffee"/>
                </div>
                <div class="footer__content">
                    <div class="footer__quota">
                        <p>Suivez nous sur les réseaux sociaux!</p>
                    </div>
                    <div class="footer__socials">
                        <a href="http://www.linkedin.com"><img src="../images/logo_linkedin.png" alt="Le logo de Linkedin"/></a>
                        <a href="http://www.twitter.com"><img src="../images/logo_twitter.png" alt="Le logo de Twitter"/></a>
                        <a href="http://www.facebook.com"><img src="../images/logo_facebook.png" alt="Le logo de Facebook"/></a>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;