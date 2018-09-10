/**
 * Create by wujianchuan 2018/9/6
 */
import React from 'react';
import LineCharts from "../components/LineCharts";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import ScreenProperties from '../data/ScreenProperties';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    grayCard: {
        backgroundColor: '#666',
        margin: 10,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class FirstPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
                {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
                {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
            ]
        };

        this.getData.bind(this);
    }

    getData() {
        fetch(ScreenProperties.token, {
            method: 'GET'
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
        }).catch(erro => {
            console.log("Oh Erro ", erro);
        })
    }

    render() {
        const {classes} = this.props;
        const data = this.state.data;

        return (
            <div>
                <Grid container spacing={8} direction="row" justify="center" alignItems="center">
                    <Grid item xs={6}>
                        <Card className={classes.grayCard}>
                            <CardContent>
                                <LineCharts data={data}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card className={classes.grayCard}>
                            <CardContent>
                                <LineCharts data={data}/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Button color="primary" className={classes.button} onClick={this.getData}>
                    getToken
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(FirstPage);