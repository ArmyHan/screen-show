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
import FirstPageConfig from '../data/FirstPageConfig';
import GlobalConfig from '../GlobalConfig';

const requestTimer = GlobalConfig.RequestTimer;
const topLeftTableHead = FirstPageConfig.topLeftTable.header;
const topLeftTableTitle = FirstPageConfig.topLeftTable.title;
const footData = [
    {labelName: "年度预算总额：", value: "123,456,456,0000"},
    {labelName: "年度采购总额：", value: "123,456,456,0000"},
    {labelName: "完成率：", value: "100%"},
];

class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false, topLeftData: [], pageSize: 6, pageNumber: 0};
    }

    componentDidMount() {
        this.setState({show: true});
        this.timerID = setInterval(() => this.setData(), requestTimer)
    }

    setData() {
        let completionSituation = Math.round(Math.random() * 100);
        let budgetAmount = Math.round(Math.random() * 10000000);
        let purchaseAmount = Math.round(Math.random() * 10000000);
        this.setState({
            topLeftData: [
                {
                    uuid: 0,
                    budgetProject: '办公用品',
                    budgetAmount: budgetAmount,
                    purchaseAmount: purchaseAmount,
                    completionSituation: completionSituation + '%'
                },
                {
                    uuid: 1,
                    budgetProject: '计量器具及量具、衡器',
                    budgetAmount: budgetAmount,
                    purchaseAmount: purchaseAmount,
                    completionSituation: completionSituation + '%'
                },
                {
                    uuid: 2,
                    budgetProject: '办公用品',
                    budgetAmount: budgetAmount,
                    purchaseAmount: purchaseAmount,
                    completionSituation: completionSituation + '%'
                },
                {
                    uuid: 3,
                    budgetProject: '计量器具及量具、衡器',
                    budgetAmount: budgetAmount,
                    purchaseAmount: purchaseAmount,
                    completionSituation: completionSituation + '%'
                },
                {
                    uuid: 4,
                    budgetProject: '计量器具及量具、衡器',
                    budgetAmount: budgetAmount,
                    purchaseAmount: purchaseAmount,
                    completionSituation: completionSituation + '%'
                },
                {
                    uuid: 5,
                    budgetProject: '办公用品',
                    budgetAmount: budgetAmount,
                    purchaseAmount: purchaseAmount,
                    completionSituation: completionSituation + '%'
                },
            ]
        })
    }

    render() {
        const {classes} = this.props;
        const {show, topLeftData, pageSize, pageNumber} = this.state;

        return (
            <Fade in={show} timeout={1000}>
                <div className={classes.root}>
                    <Grid className={classes.container} justify={"center"} container spacing={8}>
                        <Grid item xs={5}>
                            <TableBase title={topLeftTableTitle} header={topLeftTableHead} rowData={topLeftData}
                                       footData={footData} pageSize={pageSize}/>
                        </Grid>
                        <Grid item xs={7}>
                            <Paper square={false} className={classes.paper}>xs=6</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper square={false} className={classes.paper}>xs=3</Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper square={false} className={classes.paper}>xs=3</Paper>
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