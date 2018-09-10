/**
 * Create by wujianchuan 2018/9/8
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NavigationStyle from '../style/NavigationStyle';

class Navigation extends React.Component {

    state = {
        index: 0,
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.next(),
            10000
        );
    }

    componentWillUnMount() {
        clearInterval(this.timerID)
    }

    next() {
        this.setState(prevState => ({index: prevState.index === 2 ? 0 : prevState.index + 1}));
    }


    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {index} = this.state;

        return (
            <BottomNavigation
                value={index}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="FirstScreen" icon={<RestoreIcon/>}/>
                <BottomNavigationAction label="SecondScreen" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="ThirdScreen" icon={<LocationOnIcon/>}/>
            </BottomNavigation>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(NavigationStyle)(Navigation);