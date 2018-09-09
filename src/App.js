/**
 * Create by wujianchuan 2018/9/6
 */
import React from 'react';
import FirstPage from "./pages/FirstPage";
import Navigation from "./components/Navigation";

class App extends React.Component {
    render() {
        return (
            <div>
                <FirstPage/>
                <Navigation/>
            </div>
        );
    }
}

export default App;