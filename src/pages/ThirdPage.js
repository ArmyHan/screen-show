/**
 * Create by wujianchuan 2018/9/6
 */
import React from 'react';
import LineCharts from "../components/LineCharts";
import {withStyles} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";

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

class ThirdPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [{}], show: false,};
        this.setData = this.setData.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        this.setData();
        this.timerID = setInterval(
            () => this.setData(),
            100000
        );
        this.setState({show: true})
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.timerID)
    }

    setData() {
        if (this._isMounted) {
            this.setState({
                data: [
                    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
                    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
                    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
                    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
                    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
                    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
                ]
            });
        }
    }

    render() {
        const {classes} = this.props;
        const {show} = this.state;
        const {data} = this.state;

        return (
            <Fade in={show} timeout={1000}>
                <Paper>
                    <Grid container spacing={0} direction="row" justify="center" alignItems="center">
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
                </Paper>
            </Fade>
        );
    }
}

export default withStyles(styles)(ThirdPage);