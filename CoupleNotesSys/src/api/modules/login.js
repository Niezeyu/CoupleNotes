import request from "../index.js";

export default {
    login(data) {
        return request({
            url: `api/login`,
            method: "post",
            data: {
                ...data
            },
        });
    },

    register(data) {
        return request({
            url: `api/register`,
            method: "post",
            data: {
                ...data
            },
        });
    },
}