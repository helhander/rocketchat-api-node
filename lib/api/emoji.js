/**
 * Created by helhander on 2022/6/14.
 */

class Emoji {
    constructor(client) {
        this.client = client;
        client.removeHeader('Content-Type');//, 'multipart/form-data'
    }

    create(formData, callback) {
        return this.client.request("POST", "emoji-custom.create", null, callback, formData);
    }
}

module.exports = Emoji;
