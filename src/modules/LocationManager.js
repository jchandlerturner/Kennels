const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },
  getAllLocations() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },
  closeLocation(id) {
    return fetch(`http://localhost:5002/locations/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}