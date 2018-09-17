/**
 * Create by wujianchuan 2018/9/17
 */
import React from 'react';
import {borderColor, warningColor} from '../style/Color';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const cardStyle = {
    root: {
        borderStyle: "ridge",
        borderColor: borderColor,
        backgroundColor: "hsla(223, 42%, 20%, 0.3)",
        borderWidth: 1,
        paddingBottom: 18,
        paddingTop: 18,
        marginLeft: 6,
        marginRight: 6,
    }
};

const CardHead = withStyles(theme => ({
    root: {
        color: warningColor,
        fontSize: 18,
        paddingLeft: 5,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 12,
    },
}))(Typography);

const CardContent = withStyles(theme => ({
    root: {
        backgroundColor: "hsla(223, 31%, 45%, 0.6)",
        color: "#ffffff",
        marginTop: 10,
        paddingLeft: 5,
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 12,
    },
}))(Paper);

class CardContainer extends React.Component {

    getBody(cardList) {
        const {classes} = this.props;
        if (cardList !== undefined) {
            return (
                cardList.map((cardItem, cardIndex) => {
                    return (
                        <Grid key={cardIndex} item xs={4}>
                            <Paper className={classes.root} square={true}>
                                <div style={{
                                    float: "left",
                                    marginTop: -18,
                                    borderStyle: "solid",
                                    borderRightWidth: 0,
                                    borderBottomWidth: 0,
                                    borderLeftWith: 3,
                                    borderTopWidth: 3,
                                    borderColor: borderColor, width: 20, height: 20,
                                }}/>
                                <CardHead>{cardItem.title}</CardHead>
                                {
                                    cardItem.data.map((rowItem, rowIndex) => {
                                        return (
                                            <CardContent key={rowIndex} square>
                                                <table style={{width: "-webkit-fill-available"}}>
                                                    <tbody>
                                                    <tr>
                                                        <td width="30%">{rowItem.name}</td>
                                                        <td width="70%" style={{textAlign: "right", paddingRight: 5}}>
                                                            {rowItem.value}
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </CardContent>
                                        );
                                    })
                                }
                                <div style={{
                                    float: "right",
                                    marginTop: -5,
                                    borderStyle: "solid",
                                    borderRightWidth: 3,
                                    borderBottomWidth: 3,
                                    borderLeftWidth: 0,
                                    borderTopWidth: 0,
                                    borderColor: borderColor, width: 20, height: 20,
                                }}/>
                            </Paper>
                        </Grid>
                    );
                })
            );
        }
    }

    render() {
        const {cardList} = this.props;
        return (
            <div style={{paddingTop: 23, paddingBottom: 23, paddingLeft: 100, paddingRight: 100}}>
                <Grid justify={"center"} container spacing={40}>
                    {this.getBody(cardList)}
                </Grid>
            </div>
        );
    }
}

export default withStyles(cardStyle)(CardContainer);