/**
 * Create by wujianchuan 2018/9/14
 */
const TableBaseStyle = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "auto",
    },
    tableAroundPaper: {
        borderStyle: "ridge",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "hsla(223, 42%, 20%, 0.4)",
    },
});
export default TableBaseStyle;