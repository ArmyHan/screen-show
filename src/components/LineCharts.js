/**
 * Create by wujianchuan 2018/9/6
 */
import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import {withStyles} from "@material-ui/core/styles";
import ChartsStyle from '../style/ChartsStyle';

class LineCharts extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <LineChart className={classes.grayBack} width={900} height={300} data={this.props.data}>
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

export default withStyles(ChartsStyle)(LineCharts);