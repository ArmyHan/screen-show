/**
 * Create by wujianchuan 2018/9/13
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import HeaderStyle from '../style/HeaderStyle';

class Header extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.header}>
                    XXXXX后勤监控平台
                </div>
                <hr className={classes.grayDivider}/>
                <hr className={classes.blueDivider}/>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(HeaderStyle)(Header);

