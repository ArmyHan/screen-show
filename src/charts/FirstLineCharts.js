/**
 * Create by wujianchuan 2018/9/6
 */
import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    grayBack: {
        flexGrow: 1,
        backgroundColor: '#666',
        marginTop: 5, marginRight: 20, bmarginBottom: 5, marginLeft: 0
    },
});

class FirstLineCharts extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <LineChart className={classes.grayBack} width={600} height={200} data={this.props.data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                <Line type="monotone" dataKey="pv" stroke="#82ca9d"/>
                <CartesianGrid stroke="#fff" strokeDasharray="5 5"/>
                <XAxis stroke="#fff" dataKey="name"/>
                <YAxis stroke="#fff"/>
                <Tooltip/>
            </LineChart>
        );
    }
}

export default withStyles(styles)(FirstLineCharts);