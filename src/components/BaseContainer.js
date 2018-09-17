/**
 * Create by wujianchuan 2018/9/16
 */
import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import {warningColor} from '../style/Color';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const ContainerBorder = withStyles(theme => ({
    root: {
        borderStyle: "ridge",
        borderColor: "#6AACF5",
        backgroundColor: "hsla(223, 42%, 20%, 0.4)",
        borderWidth: 1,
        borderRadius: 10,
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 6,
        paddingRight: 6,
        marginTop: 5,
    },
}))(Paper);

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

const FootTitle = withStyles(theme => ({
    item: {
        color: "#f50057",
        fontSize: 17,
        textAlign: "left",
        fontWeight: "bold",
    },
}))(Grid);

const FootLabel = withStyles(theme => ({
    item: {
        color: warningColor,
        textAlign: "right",
        paddingLeft: 17,
    },
}))(Grid);

const FootContent = withStyles(theme => ({
    item: {
        color: "#6AACF5",
        textAlign: "left",
        paddingRight: 5,
    },
}))(Grid);

class BaseContainer extends React.Component {

    static getTitleTypography(title) {
        if (title !== undefined && title.length > 0) {
            return (
                <TitleTypography variant="title" gutterBottom>
                    {title}
                </TitleTypography>
            );
        }
    }

    static getFootTypography(footData, footTitle) {
        if (footData !== undefined && footData.length > 0) {
            return (
                <FootTypography variant="title" align="center">
                    <Grid container spacing={0}>
                        {footTitle !== undefined ? <FootTitle item xs={2}>{footTitle}</FootTitle> : ''}
                        <Grid item xs={footTitle !== undefined ? 10 : 12}>
                            <Grid container spacing={0}>
                                {footData.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <FootLabel item xs={2}>
                                                {item.labelName}
                                            </FootLabel>
                                            <FootContent item xs={2}>
                                                {item.value}
                                            </FootContent>
                                        </React.Fragment>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </FootTypography>
            )
                ;
        }
    }

    render() {
        const {children, headTitle, footTitle, footData} = this.props;
        return (
            <ContainerBorder square={false}>
                {BaseContainer.getTitleTypography(headTitle)}
                {children}
                {BaseContainer.getFootTypography(footData, footTitle)}
            </ContainerBorder>
        );
    }
}

export default BaseContainer;