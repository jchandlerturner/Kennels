const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(result => result.json())
  },
  getAllOwners() {
    return fetch(`${remoteURL}/owners`).then(result => result.json())
  },
  deleteOwner(id) {
    return fetch(`http://localhost:5002/owners/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}