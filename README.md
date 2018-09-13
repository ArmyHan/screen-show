# screen-show

- 请求数据示例：
```javascript
class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [{}],};
        this.setData = this.setData.bind(this);
    }

    componentDidMount() {
        const dataRequestTimer = Config.DataRequestTimer;
        this.setData();
        this.timerID = setInterval(
            () => this.setData(),
            dataRequestTimer
        );
    }

    componentWillUnMount() {
        clearInterval(this.timerID)
    }

    setData() {
        getToken().then((responseData) => {
            console.log(responseData.token);
            fetch(ScreenProperties.firstPageUrl + '?token=' + responseData.token, {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then((responseData) => {
                console.log(responseData.objects);
                this.setState({
                    data: responseData.objects
                });
            }).catch(erro => {
                console.log("Oh Erro ", erro);
            })
        }).catch(erro => {
            console.log("Oh Erro ", erro);
        });
    }

    render() {
        const {data} = this.state;

        return (
            <div>
                {data}
            </div>
        );
    }
}

export default withStyles(styles)(FirstPage);
```