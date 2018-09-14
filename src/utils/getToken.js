import Config from "../config";

/**
 * Create by wujianchuan 2018/9/10
 */

const getToken = () => {
    return fetch(Config.token, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).catch(erro => {
        console.log("Oh Erro ", erro);
    })
};

export default getToken;