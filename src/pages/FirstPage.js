/**
 * Create by wujianchuan 2018/9/6
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FirstPageStyle from '../style/FirstPageStyle';
import TableBase from '../components/TableBase';

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
                <div className={classes.root}>
                    <Grid className={classes.container} container spacing={24}>
                        <Grid item xs={5}>
                            <TableBase/>
                        </Grid>
                        <Grid item xs={7}>
                            <Paper square={true} className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper square={true} className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper square={true} className={classes.paper}>xs=3</Paper>
                        </Grid>
                    </Grid>
                </div>
            </Fade>
        );
    }
}

FirstPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(FirstPageStyle)(FirstPage);