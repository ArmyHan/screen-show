/**
 * Create by wujianchuan 2018/9/14
 */
import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import {warningColor, infoColor, dangerColor, grayColor} from '../style/Color';
import Paper from '@material-ui/core/Paper';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

const TableContentCell = withStyles(theme => ({
    root: {
        color: "#6AACF5",
        opacity: 0.8,
        fontSize: 15,
        paddingLeft: 6,
        paddingRight: 6,
    },
}))(TableCell);

const TableTitleCell = withStyles(theme => ({
    head: {
        color: warningColor,
        fontSize: 16,
        paddingLeft: 6,
        paddingRight: 6,
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

const InfoTip = withStyles(theme => ({
    root: {
        backgroundColor: infoColor,
        color: "#fff",
        margin: 0,
        width: 25,
        height: 25,
        lineHeight: "25px",
        textAlign: "center",
        fontSize: 17,
    }
}))(Paper);

const WarningTip = withStyles(theme => ({
    root: {
        backgroundColor: warningColor,
        color: "#fff",
        margin: 0,
        width: 25,
        height: 25,
        lineHeight: "25px",
        textAlign: "center",
        fontSize: 17,
    }
}))(Paper);

const DangerTip = withStyles(theme => ({
    root: {
        backgroundColor: dangerColor,
        color: "#fff",
        margin: 0,
        width: 25,
        height: 25,
        lineHeight: "25px",
        textAlign: "center",
        fontSize: 17,
    }
}))(Paper);

const UnKnowTip = withStyles(theme => ({
    root: {
        backgroundColor: grayColor,
        color: "#fff",
        margin: 0,
        width: 25,
        height: 25,
        lineHeight: "25px",
        textAlign: "center",
        fontSize: 10,
    }
}))(Paper);

const tipsName = ['info', 'warning', 'danger'];

class TableBase extends React.Component {

    static getTip(tipName) {
        tipName = tipName.toLowerCase();
        if ('info' === tipName) {
            return <InfoTip>I</InfoTip>
        } else if ('warning' === tipName) {
            return <WarningTip>W</WarningTip>
        } else if ('danger' === tipName) {
            return <DangerTip>D</DangerTip>
        } else {
            return <UnKnowTip>UnKnow</UnKnowTip>
        }
    }

    getTableBody(header, rowData, pageSize) {
        let result = [];
        if (rowData !== undefined && rowData.length !== 0) {
            result.push(
                rowData.map((rowItem, rowIndex) => {
                    return (
                        <TableContentRow key={rowIndex}>
                            {header.map((headItem, headIndex) => {
                                const cellValue = rowItem[headItem.name];
                                if (headIndex === 0) {
                                    return <TableContentCell numeric={headItem.numeric} key={headIndex}
                                                             style={{color: "#ffffff",}} component="th"
                                                             scope="row">
                                        {cellValue}
                                    </TableContentCell>
                                } else {
                                    return <TableContentCell numeric={headItem.numeric} key={headIndex}>
                                        {tipsName.indexOf(cellValue) === -1 ? cellValue : TableBase.getTip(cellValue)}
                                    </TableContentCell>
                                }
                            })}
                        </TableContentRow>
                    );
                })
            );
            if (rowData.length < pageSize) {
                for (let rowIndex = 0; rowIndex < pageSize - rowData.length; rowIndex++) {
                    result.push(<TableContentRow key={rowIndex}>
                        {header.map((headItem, headIndex) => {
                            if (headIndex === 0) {
                                return <TableContentCell numeric={headItem.numeric} key={headIndex}
                                                         style={{color: "#ffffff",}} component="th"
                                                         scope="row">
                                    ---
                                </TableContentCell>
                            } else {
                                return <TableContentCell numeric={headItem.numeric} key={headIndex}>
                                    ---
                                </TableContentCell>
                            }
                        })}
                    </TableContentRow>);
                }
            }
        } else {
            for (let rowIndex = 0; rowIndex < pageSize; rowIndex++) {
                result.push(<TableContentRow key={rowIndex}>
                    {header.map((headItem, headIndex) => {
                        if (headIndex === 0) {
                            return <TableContentCell numeric={headItem.numeric} key={headIndex}
                                                     style={{color: "#ffffff",}} component="th"
                                                     scope="row">
                                ---
                            </TableContentCell>
                        } else {
                            return <TableContentCell numeric={headItem.numeric} key={headIndex}>
                                ---
                            </TableContentCell>
                        }
                    })}
                </TableContentRow>);
            }
        }
        return result;
    }

    static getTableHead(header) {
        if (header !== undefined && header.length > 0) {
            return (
                <TableTitleRow>
                    {header.map((headItem, headIndex) => {
                        return <TableTitleCell numeric={headItem.numeric} key={headIndex}>
                            {headItem.displayName}
                        </TableTitleCell>
                    })}
                </TableTitleRow>
            );
        } else {
            return (
                <TableTitleRow style={{fontSize: 30, color: "red", textAlign: "center"}}>
                    找不到配置信息!
                </TableTitleRow>
            );
        }
    }

    render() {
        const {header, rowData, pageSize} = this.props;
        return (
            <Table>
                <TableHead>
                    {TableBase.getTableHead(header)}
                </TableHead>
                <TableBody>
                    {this.getTableBody(header, rowData, pageSize)}
                </TableBody>
            </Table>
        );
    }
}

export default TableBase;