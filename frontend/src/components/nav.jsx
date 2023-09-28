import React, { Component } from 'react';


class Nav extends Component {
    state = { 
        login: false
     } 
    render() { 
        return (
            <div class="menu__wrap" id="navbar">
                <nav class="menu" id="menu">
                    <ul class="menu__list r-list">
                        <li class="menu__list-item"><a href="/" class="menu__link r-link text-underlined">Home</a></li>
                        <li class="menu__list-item"><a href="/search" class="menu__link r-link text-underlined">Get some food</a></li>
                        <li class="menu__list-item"><a href="/sher" class="menu__link r-link text-underlined">Sher your food</a></li>
                        {% if login %}
                        <li class="menu__list-item"><a href="/logout" class="menu__link r-link text-underlined">Log out</a></li>
                        {% else %}
                        <li class="menu__list-item"><a href="/login" class="menu__link r-link text-underlined">Log in</a></li>
                        {% endif %}
                </ul>
                </nav>
            </div>
        );
    }
}
 
export default Nav;