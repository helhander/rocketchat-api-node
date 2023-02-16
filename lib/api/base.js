async function idOrNameRequest(params, endpoint, callback, request, method = 'GET') {
    if (params.id)
        return request(method, endpoint, { ...params.id }, callback);
    else if (params.name)
        return request(method, endpoint, { ...params.name }, callback);
    else {
        let errMsg = "id or name is required";
        callback(errMsg);
        return Promise.reject(errMsg);
    }
}

module.exports = { idOrNameRequest };