/**
 * Create by wujianchuan 2018/9/8
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import NavigationStyle from '../style/NavigationStyle';
import config from '../config';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {index: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.next(),
            5000
        );
    }

    componentWillUnMount() {
        clearInterval(this.timerID)
    }

    next() {
        this.setState(prevState => ({index: prevState.index === config.BottomNavigationActionList.length - 1 ? this.props.action(0) : this.props.action(prevState.index + 1)}));
    }


    handleChange(event, value) {
        this.setState({index: value});
        this.props.action(value);
    };

    render() {
        const {classes} = this.props;
        const {index} = this.state;
        const bottomNavigationActionList = config.BottomNavigationActionList;

        return (
            <BottomNavigation
                value={index}
                onChange={this.handleChange}
                showLabels
                className={classes.Navigation}
            >
                {bottomNavigationActionList.map((item, itemIndex) => {
                    return <BottomNavigationAction label={<div
                        className={index === itemIndex ? classes.LabelNameSelectedStyle : classes.LabelNameStyle}>{item.labelName}</div>}
                                                   icon={<div
                                                       className={index === itemIndex ? classes[item.selectedIcon] : classes[item.unSelectedIcon]}/>}/>
                })}
            </BottomNavigation>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(NavigationStyle)(Navigation);