/**
 * Create by wujianchuan 2018/9/6
 */
import React from 'react';
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import Navigation from "./components/Navigation";

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
            <div>{index === 0 ? <FirstPage/> : index === 1 ? <SecondPage/> : <ThirdPage/>}
                <Navigation action={this.setIndex}/>
            </div>
        );
    }
}

export default App;