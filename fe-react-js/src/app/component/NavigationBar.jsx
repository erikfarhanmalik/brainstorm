import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

import '../css/navigation-bar.css';

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar brand='BrainStorm!' right>
                <NavItem href='/post-question'><Icon>search</Icon></NavItem>
                <NavItem href='/post-question'><Icon>view_module</Icon></NavItem>
                <NavItem href='/post-question'><Icon>refresh</Icon></NavItem>
                <NavItem href='/post-question'><Icon>more_vert</Icon></NavItem>
            </Navbar>
        )
    }

}

export default NavigationBar;