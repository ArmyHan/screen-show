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
        this.state = {show: false, data: {}, pageNumber: 0};
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
                        }
                    ],
                    topRightData: [{
                        uuid: 0,
                        materialName: "乙肝HBSAG金标试纸条（创新停用）",
                        specification: "10个/袋",
                        unit: "袋",
                        warning: "info",
                        lowerLimit: "123456",
                        upperLimit: "654321",
                        stock: "2233456",
                        stockValue: "123,456,789,000"
                    }, {
                        uuid: 1,
                        materialName: "乙肝HBSAG金标试纸条（创新停用）",
                        specification: "10个/袋",
                        unit: "袋",
                        warning: "warning",
                        lowerLimit: "123456",
                        upperLimit: "654321",
                        stock: "2233456",
                        stockValue: "123,456,789,000"
                    }, {
                        uuid: 2,
                        materialName: "乙肝HBSAG金标试纸条（创新停用）",
                        specification: "10个/袋",
                        unit: "袋",
                        warning: "danger",
                        lowerLimit: "123456",
                        upperLimit: "654321",
                        stock: "2233456",
                        stockValue: "123,456,789,000"
                    }],
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
                    ],
                    bottomRightData: [
                        {uuid: 0, warningProject: "中心库存", warningInformation: "xxx物料库存不足"}
                    ]
                }
            })
        }
    }

    render() {
        const {classes} = this.props;
        const {show, data, pageNumber} = this.state;

        return (
            <Fade in={show} timeout={1000}>
                <div className={classes.root}>
                    <Grid justify={"center"} container spacing={24}>
                        <Grid item xs={5}>
                            <BaseContainer headTitle={topLeftContainer.title} footData={footData}>
                                <TableBase header={topLeftContainer.header} rowData={data.topLeftData}
                                           pageSize={topLeftContainer.pageSize}/>
                            </BaseContainer>
                        </Grid>
                        <Grid item xs={7}>
                            <BaseContainer headTitle={topRightContainer.title} footTitle={"中心存货价值"} footData={footData}>
                                <TableBase header={topRightContainer.header} rowData={data.topRightData}
                                           pageSize={topRightContainer.pageSize}/>
                            </BaseContainer>
                        </Grid>
                        <Grid item xs={6}>
                            <BaseContainer headTitle={bottomLeftContainer.title}>
                                <CardContainer cardList={data.bottomLeftData}/>
                            </BaseContainer>
                        </Grid>
                        <Grid item xs={6}>
                            <BaseContainer headTitle={bottomRightContainer.title}>
                                <TableBase header={bottomRightContainer.header} rowData={data.bottomRightData}
                                           pageSize={bottomRightContainer.pageSize}/>
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