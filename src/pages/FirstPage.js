/**
 * Create by wujianchuan 2018/9/6
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import Fade from '@material-ui/core/Fade';
import FirstPageStyle from '../style/FirstPageStyle';

class FirstPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {show: false,};
    }

    componentDidMount() {
        this.setState({show: true})
    }

    render() {
        const {classes} = this.props;
        const {show} = this.state;
        return (
            <Fade in={show} timeout={1000}>
                <span>I do not need this background image.</span>
            </Fade>
        );
    }
}

FirstPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(FirstPageStyle)(FirstPage);