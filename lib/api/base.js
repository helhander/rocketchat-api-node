function idOrNameRequest(params, endpoint, callback, method = "GET") {
  const idField = Object.keys(params.id)[0];
  const nameField = Object.keys(params.name)[0];
  if (params.id[idField])
    return this.client.request(method, endpoint, { ...params.id }, callback);
  else if (params.name[nameField])
    return this.client.request(method, endpoint, { ...params.name }, callback);
  else {
    let errMsg = `${idField} or ${nameField} is required`;
    callback(errMsg);
    return Promise.reject(errMsg);
  }
}

module.exports = { idOrNameRequest };
