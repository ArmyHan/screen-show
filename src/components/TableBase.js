/**
 * Create by wujianchuan 2018/9/14
 */
import React from 'react';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import TableBaseStyle from '../style/TableBaseStyle';
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

let id = 0;

function createData(name, calories, fat, carbs) {
    id += 1;
    return {id, name, calories, fat, carbs};
}

const rows = [
    createData('办公用品', '123,456,456,0000', '123,456,456,0000', '100%'),
    createData('计量器具及量具、衡器', '123,456,456,0000', '123,456,456,0000', '100%'),
    createData('计量器具及量具、衡器', '123,456,456,0000', '123,456,456,0000', '100%'),
    createData('办公用品', '123,456,456,0000', '123,456,456,0000', '100%'),
    createData('办公用品', '123,456,456,0000', '123,456,456,0000', '100%'),
    createData('计量器具及量具、衡器', '123,456,456,0000', '123,456,456,0000', '100%'),
];

const TableTitleCell = withStyles(theme => ({
    head: {
        color: "#ff9800",
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const TableContentCell = withStyles(theme => ({
    root: {
        color: "#6AACF5",
        opacity: 0.8
    },
}))(TableCell);

const TitleTypography = withStyles(theme => ({
    root: {
        backgroundColor: "hsla(223, 42%, 20%, 0.8)",
        padding: 10,
        color: "#f50057",
        fontWeight: "bold",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
}))(Typography);

const FootTypography = withStyles(theme => ({
    root: {
        backgroundColor: "hsla(223, 42%, 20%, 0.8)",
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
}))(Typography);

const GridLabel = withStyles(theme => ({
    item: {
        color: "#ff9800",
        textAlign: "right",
        fontSize: 13,
    },
}))(Grid);

const GridContent = withStyles(theme => ({
    item: {
        color: "#6AACF5",
        textAlign: "left",
        fontSize: 13,
    },
}))(Grid);

class TableBase extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.tableAroundPaper} square={false}>
                    <TitleTypography variant="title" gutterBottom>
                        年度预算执行情况
                    </TitleTypography>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableTitleCell>预算项目</TableTitleCell>
                                <TableTitleCell numeric>预算总额</TableTitleCell>
                                <TableTitleCell numeric>采购总额</TableTitleCell>
                                <TableTitleCell numeric>完成</TableTitleCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableContentCell style={{color: "#ffffff",}} component="th"
                                                          scope="row">
                                            {row.name}
                                        </TableContentCell>
                                        <TableContentCell numeric>{row.calories}</TableContentCell>
                                        <TableContentCell numeric>{row.fat}</TableContentCell>
                                        <TableContentCell numeric>{row.carbs}</TableContentCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <FootTypography variant="title" align="center">
                        <Grid container spacing={0}>
                            <GridLabel item xs={2}>
                                年度预算总额：
                            </GridLabel>
                            <GridContent item xs={3}>
                                123,456,456,0000
                            </GridContent>
                            <GridLabel item xs={2}>
                                年度采购总额：
                            </GridLabel>
                            <GridContent item xs={2}>
                                123,456,456,0000
                            </GridContent>
                            <GridLabel item xs={2}>
                                完成率：
                            </GridLabel>
                            <GridContent item xs={1}>
                                100%
                            </GridContent>
                        </Grid>
                    </FootTypography>
                </Paper>
            </div>
        );
    }
}

TableBase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(TableBaseStyle)(TableBase);