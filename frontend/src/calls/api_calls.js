import { GET, POST } from "./__basic__";


export const getFiles = (successCallback, errorCallback) => {
    GET(`/list`, 200, successCallback, errorCallback);
};

export const postScan = (filename, format, successCallback, errorCallback) => {
    if (filename === undefined || filename === null) {
        filename = (new Date()).toJSON();
    }
    let body = JSON.stringify({filename, format});
    POST(`/scan`, body, 200, successCallback, errorCallback);
};
