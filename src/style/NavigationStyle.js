import Footer from "../components/imgs/footer.png";
import Icon1 from "../components/imgs/icon_1.png";
import Icon01 from "../components/imgs/icon_01.png";

/**
 * Create by wujianchuan 2018/9/9
 */
const NavigationStyle = {
    Navigation: {
        flexGrow: 1,
        position: 'absolute',
        bottom: 0,
        width: '-webkit-fill-available',
        height: 110,
        backgroundImage: "url(" + Footer + ")",
        backgroundRepeat: "round",
        backgroundColor: "#060e21",
    },
    FirstPageIcon: {
        width: 90,
        height: 80,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(" + Icon1 + ")"
    },
    FirstPageIconSelected: {
        width: 90,
        height: 80,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(" + Icon01 + ")"
    },
    LabelNameSelectedStyle: {
        color: "#8e9df5",
        textShadow: "0px 1px 20px #fff",
    },
    LabelNameStyle: {
        color: "#3f51b5"
    }
};
export default NavigationStyle;