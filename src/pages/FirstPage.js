/**
 * Create by wujianchuan 2018/9/6
 */
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import FirstPageStyle from '../style/FirstPageStyle';
import FirstPageConfig from '../data/FirstPageConfig';
import GlobalConfig from '../GlobalConfig';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import TableBase from '../components/TableBase';
import BaseContainer from "../components/BaseContainer";
import CardContainer from "../components/CardContainer";

const requestTimer = GlobalConfig.RequestTimer;
const topLeftContainer = FirstPageConfig.topLeftContainer;
const topRightContainer = FirstPageConfig.topRightContainer;
const bottomLeftContainer = FirstPageConfig.bottomLeftContainer;
const bottomRightContainer = FirstPageConfig.bottomRightContainer;
const footData = [
    {labelName: "年度预算总额：", value: "123,456,456,0000"},
    {labelName: "年度采购总额：", value: "123,456,456,0000"},
    {labelName: "完成率：", value: "100%"},
];

class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false, data: {}, pageSize: 6, pageNumber: 0};
    }

    componentDidMount() {
        this._isMounted = true;
        this.setState({show: true});
        this.setData();
        this.timerID = setInterval(() => this.setData(), requestTimer)
    }


    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.timerID);
    }

    setData() {
        let completionSituation = Math.round(Math.random() * 100);
        let budgetAmount = Math.round(Math.random() * 10000000);
        let purchaseAmount = Math.round(Math.random() * 10000000);
        if (this._isMounted) {
            this.setState({
                data: {
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
                    ],
                    bottomLeftData: [
                        {
                            title: '在册资产',
                            data: [{name: "资产", value: '200台'},
                                {name: "价值", value: '1456,00万'},
                                {name: "在用", value: '100台'},
                                {name: "闲置", value: '100台'}]
                        }, {
                            title: '资产请购',
                            data: [{name: "申请", value: '200台'},
                                {name: "已批", value: '200台'},
                                {name: "已采", value: '100台'},
                                {name: "待批", value: '100台'}]
                        }, {
                            title: '资产报废',
                            data: [{name: "申请", value: '200台'},
                                {name: "已批", value: '200台'},
                                {name: "已采", value: '100台'},
                                {name: "待批", value: '100台'}]
                        }
                    ]
                }
            })
        }
    }

    render() {
        const {classes} = this.props;
        const {show, data, pageSize, pageNumber} = this.state;

        return (
            <Fade in={show} timeout={1000}>
                <div className={classes.root}>
                    <Grid justify={"center"} container spacing={24}>
                        <Grid item xs={5}>
                            <BaseContainer title={topLeftContainer.title} footData={footData}>
                                <TableBase header={topLeftContainer.header} rowData={data.topLeftData}
                                           pageSize={pageSize}/>
                            </BaseContainer>
                        </Grid>
                        <Grid item xs={7}>
                            <BaseContainer title={topRightContainer.title} footData={footData}>
                                <TableBase header={topLeftContainer.header} rowData={data.topLeftData}
                                           pageSize={pageSize}/>
                            </BaseContainer>
                        </Grid>
                        <Grid item xs={6}>
                            <BaseContainer title={bottomLeftContainer.title}>
                                <CardContainer cardList={data.bottomLeftData}/>
                            </BaseContainer>
                        </Grid>
                        <Grid item xs={6}>
                            <BaseContainer title={bottomRightContainer.title}>
                                <TableBase header={topLeftContainer.header} rowData={data.topLeftData}
                                           pageSize={pageSize}/>
                            </BaseContainer>
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