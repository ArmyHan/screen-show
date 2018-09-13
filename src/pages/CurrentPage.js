/**
 * Create by wujianchuan 2018/9/13
 */
import React from 'react';
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

class CurrentPage extends React.Component {
    render() {
        const {pageIndex} = this.props;
        if (pageIndex === 0) {
            return <FirstPage/>;
        } else if (pageIndex === 1) {
            return <SecondPage/>;
        } else if (pageIndex === 2) {
            return <ThirdPage/>;
        }
    }
}

export default CurrentPage;