/**
 * Created by helhander on 2022/2/1.
 */

class Teams {
    constructor(client) {
        this.client = client;
    }

    removeMember({ userId, teamId, rooms } = {}, callback) {
        if (!userId || !teamId) {
            let errMsg = `userId and teamId is required, but got: ${userId}, ${teamId}`;
            callback(errMsg);
            return Promise.reject(errMsg);
        }

        let body = { userId, teamId };
        if (rooms !== undefined) body.rooms = rooms;

        return this.client.request("POST", "teams.removeMember", body, callback);
    }

    listRooms(teamId, callback) {
        return this.client.request("GET", "teams.listRooms", {
            teamId
        }, callback);
    }
}

module.exports = Teams;
