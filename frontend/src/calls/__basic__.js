import response from './responses';

const PREFIX = '';
// const PREFIX = 'http://localhost:8080';

export const CT_JSON = 'application/json';
export const CT_XFORM_URL_ENCODED = 'application/x-www-form-urlencoded';


function basic_call (method, url, body, expected_status_code, successCallback, errorCallback, opts) {
    if (opts === undefined) {
        opts = {};
    }

    fetch(`${PREFIX}${url}`, {
        method: method,
        headers: {
            'Content-Type': CT_JSON,
            ...opts.headers
        },
        body,
    }).then(res => {response(res, expected_status_code, successCallback, errorCallback)});
}


export function GET(url, expected_status_code, successCallback, errorCallback, opts) {
    basic_call('GET', url, undefined, expected_status_code, successCallback, errorCallback, opts);
}


export function POST(url, body, expected_status_code, successCallback, errorCallback, opts) {
    basic_call('POST', url, body, expected_status_code, successCallback, errorCallback, opts);
}

export function PUT(url, body, expected_status_code, successCallback, errorCallback, opts) {
    basic_call('PUT', url, body, expected_status_code, successCallback, errorCallback, opts);
}

export function PATCH(url, body, expected_status_code, successCallback, errorCallback, opts) {
    basic_call('PATCH', url, body, expected_status_code, successCallback, errorCallback, opts);
}

export function DELETE(url, body, expected_status_code, successCallback, errorCallback, opts) {
    basic_call('DELETE', url, body, expected_status_code, successCallback, errorCallback, opts);
}
