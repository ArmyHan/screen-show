/**
 * Create by wujianchuan 2018/9/14
 */
import React from 'react';
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
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

class TableBase extends React.Component {

    getTableBody(header, rowData, pageSize) {
        if (rowData !== undefined && rowData.length > 0) {
            return rowData.map((rowItem, rowIndex) => {
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
            });
        } else {
            let result = [];
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
            return result;
        }
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