import ScreenProperties from "../data/ScreenProperties";

/**
 * Create by wujianchuan 2018/9/10
 */

const getToken = () => {
    return fetch(ScreenProperties.token, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).catch(erro => {
        console.log("Oh Erro ", erro);
    })
};

export default getToken;