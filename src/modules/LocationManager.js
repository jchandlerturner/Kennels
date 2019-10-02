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
  },
  post(newLocation) {
    return fetch(`${remoteURL}/locations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLocation)
    }).then(data => data.json())
}
}