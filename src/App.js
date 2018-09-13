/**
 * Create by wujianchuan 2018/9/6
 */
import React from 'react';
import CurrentPage from "./pages/CurrentPage";
import Navigation from "./components/Navigation";
import Header from "./components/Header";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {index: 0};
    }

    setIndex = (value) => {
        this.setState({index: value});
        return value;
    };

    render() {
        const {index} = this.state;
        return (
            <div>
                <Header/>
                <CurrentPage pageIndex={index}/>
                <Navigation action={this.setIndex}/>
            </div>
        );
    }
}

export default App;