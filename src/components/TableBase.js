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

const TableContentCell = withStyles(theme => ({
    root: {
        color: "#6AACF5",
        opacity: 0.8,
        fontSize: 15,
    },
}))(TableCell);

const TableTitleCell = withStyles(theme => ({
    head: {
        color: "#ff9800",
        fontSize: 16,
    },
}))(TableCell);

const TableContentRow = withStyles(theme => ({
    root: {
        height: 39,
    }
}))(TableRow);

const TableTitleRow = withStyles(theme => ({
    root: {
        height: 44,
    }
}))(TableRow);

const TitleTypography = withStyles(theme => ({
    root: {
        backgroundColor: "hsla(223, 42%, 20%, 0.8)",
        padding: 10,
        color: "#f50057",
        fontWeight: "bold",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontSize: 17,
    }
}))(Typography);

const FootTypography = withStyles(theme => ({
    root: {
        backgroundColor: "hsla(223, 42%, 20%, 0.8)",
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        fontSize: 15,
    },
}))(Typography);

const FootLabel = withStyles(theme => ({
    item: {
        color: "#ff9800",
        textAlign: "right",
    },
}))(Grid);

const FootContent = withStyles(theme => ({
    item: {
        color: "#6AACF5",
        textAlign: "left",
    },
}))(Grid);

class TableBase extends React.Component {
    render() {
        const {classes, title, header, rowData, footData} = this.props;
        const footXs = footData > 3 ? 1 : 2;
        return (
            <div>
                <Paper className={classes.tableAroundPaper} square={false}>
                    <TitleTypography variant="title" gutterBottom>
                        {title}
                    </TitleTypography>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableTitleRow>
                                {header.map((headItem, headIndex) => {
                                    return <TableTitleCell numeric={headItem.numeric} key={headIndex}>
                                        {headItem.displayName}
                                    </TableTitleCell>
                                })}
                            </TableTitleRow>
                        </TableHead>
                        <TableBody>
                            {rowData.map((rowItem, rowIndex) => {
                                return (
                                    <TableContentRow key={rowIndex}>
                                        {header.map((headItem, headIndex) => {
                                            if (headIndex === 0) {
                                                return <TableContentCell numeric={headItem.numeric} key={headIndex}
                                                                         style={{color: "#ffffff",}} component="th"
                                                                         scope="row">
                                                    {rowItem[headItem.name]}
                                                </TableContentCell>
                                            } else {
                                                return <TableContentCell numeric={headItem.numeric} key={headIndex}>
                                                    {rowItem[headItem.name]}
                                                </TableContentCell>
                                            }
                                        })}
                                    </TableContentRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <FootTypography variant="title" align="center">
                        <Grid container spacing={0}>
                            {footData.map((item, index) => {
                                return (
                                    <React.Fragment>
                                        <FootLabel item xs={footXs}>
                                            {item.labelName}
                                        </FootLabel>
                                        <FootContent item xs={footXs}>
                                            {item.value}
                                        </FootContent>
                                    </React.Fragment>
                                );
                            })}
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