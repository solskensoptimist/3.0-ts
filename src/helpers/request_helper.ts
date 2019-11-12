import axios from 'axios';
import _ from 'underscore';

/**
 * Helper to make requests.
 *
 * @param payload.data
 * @param payload.method
 * @param payload.url
 */
const request = (payload) => {
    return new Promise((resolve, reject) => {
        let params = {
            url: payload.url,
            method: payload.method,
            headers: {
                'Content-Type' : 'application/json',
                'Cache': 'no-cache'
            },
            withCredentials: true // Important for authentication.
        };

        if (payload.method === 'get') {
            _.extend(params, {params: payload.data});
        } else {
            _.extend(params, {data: payload.data});
        }

        axios(params)
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        })
    });
};

export default request;
