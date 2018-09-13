/**
 * Create by wujianchuan 2018/9/4
 */
import React from "react";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import moment from "moment";
import Paper from '@material-ui/core/Paper';
import TickStyle from '../style/TickStyle';

class Tick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentTime: moment().format('YYYY-MM-DD HH:mm:ss')};
    }

    tick() {
        this.setState({
            currentTime: moment().format('YYYY-MM-DD HH:mm:ss')
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnMount() {
        clearInterval(this.timerID)
    }

    render() {
        const content = "本次监控时间：" + this.state.currentTime;
        const {classes} = this.props;
        return (
            <Paper elevation={1} className={classes.tickPaper}>{content}</Paper>
        );
    }
}

Tick.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(TickStyle)(Tick);