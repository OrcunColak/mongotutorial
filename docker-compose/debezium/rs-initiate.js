rs.initiate({
  _id: "docker-rs",
  members: [
    { _id: 0, host: "mongodb:27017" } // Set the container hostname to match `hostname` in docker-compose
  ]
});

//rs.initiate();