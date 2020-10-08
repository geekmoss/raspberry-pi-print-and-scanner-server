export const response = (res, expected_status_code, successCallback, errorCallback) => {
    if (res.headers.get('content-type') !== 'application/json') {
        errorCallback({fatal: true, detail: "Internal Server Error"})
    }

    if ((expected_status_code instanceof Array && expected_status_code.indexOf(res.status) === -1) ||
        (typeof expected_status_code === "number" && expected_status_code !== res.status )) {

        res.json().then(data => {
            errorCallback({fatal: false, ...data});
        })

        return;
    }

    if (res.status === 204) {
        successCallback(null);
        return;
    }

    res.json().then(successCallback);
};


export default response;
