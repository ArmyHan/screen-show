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
import getToken from '../utils/getToken';

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
        this.state = {data: {}};
        this.setData = this.setData.bind(this);
    }

    componentDidMount() {
        this.setData();
        this.timerID = setInterval(
            () => this.setData(),
            10000
        );
    }

    componentWillUnMount() {
        clearInterval(this.timerID)
    }

    setData() {
        getToken().then((responseData) => {
            console.log(responseData.token);
            fetch(ScreenProperties.firstPageUrl + '?token=' + responseData.token, {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then((responseData) => {
                console.log(responseData.objects);
                this.setState({
                    data: responseData.objects
                });
            }).catch(erro => {
                console.log("Oh Erro ", erro);
            })
        }).catch(erro => {
            console.log("Oh Erro ", erro);
        });
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
                <Button variant="contained" color="primary" className={classes.button} onClick={this.setData}>
                    getData
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(FirstPage);