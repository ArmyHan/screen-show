/**
 * Create by wujianchuan 2018/9/9
 */
import Footer from "./imgs/footer.png";
import Icon1 from "./imgs/icon_1.png";
import Icon01 from "./imgs/icon_01.png";

const NavigationStyle = {
    Navigation: {
        flexGrow: 1,
        position: 'absolute',
        bottom: 0,
        width: '-webkit-fill-available',
        height: 110,
        backgroundImage: "url(" + Footer + ")",
        backgroundRepeat: "round",
        backgroundColor: "hsla(223, 42%, 20%, 0)",
    },
    FirstPageIcon: {
        width: 90,
        height: 80,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(" + Icon1 + ")",
        marginTop: -4,
    },
    FirstPageIconSelected: {
        width: 90,
        height: 80,
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(" + Icon01 + ")",
        marginTop: -4,
    },
    LabelNameSelectedStyle: {
        color: "#fff",
        textShadow: "0px 2px 20px #fff",
    },
    LabelNameStyle: {
        color: "#fff",
        opacity: 0.4,
    },
};
export default NavigationStyle;