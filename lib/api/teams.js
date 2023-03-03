/**
 * Created by helhander on 2022/2/1.
 */

const { idOrNameRequest } = require("./base");

class Teams {
  constructor(client) {
    this.client = client;
  }

  info({ teamId, teamName }, callback) {
    return idOrNameRequest.bind(this)(
      { id: { teamId }, name: { teamName } },
      "teams.info",
      callback
    );
  }

  removeMember({ userId, teamId, rooms } = {}, callback) {
    if (!userId || !teamId) {
      let errMsg = `userId and teamId is required, but got: ${userId}, ${teamId}`;
      callback(errMsg);
      return Promise.reject(errMsg);
    }

    let body = { userId, teamId };
    if (Array.isArray(rooms) && rooms.length > 0) body.rooms = rooms;

    return this.client.request("POST", "teams.removeMember", body, callback);
  }

  listRooms(teamId, callback) {
    return this.client.request(
      "GET",
      "teams.listRooms",
      {
        teamId,
      },
      callback
    );
  }
}

module.exports = Teams;
