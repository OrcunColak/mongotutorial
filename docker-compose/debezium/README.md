# Read me

The original idea is from  
https://github.com/lydtechconsulting/kafka-connect-debezium-mongodb

# Mongo Replica Set

The status of the replica set can be viewed with

```
mongosh --eval "rs.status()"
```

This should show the single replica set, marked as the PRIMARY member.

# Debezium Connectors

Run to check for connectors

```
curl localhost:8083/connectors
```

Run to register connector

```
curl -i -X POST localhost:8083/connectors -H "Content-Type: application/json" -d ./connector.json
curl -i -X POST http://localhost:8083/connectors -H "Content-Type: application/json" -d "@.\connector.json"

```

# Kafka

Verify topic

```
kafka-topics --bootstrap-server kafka:29092 --list
kafka-console-consumer --topic mongodb.demo.items --bootstrap-server kafka:29092
```

# Mongo Create Item

Start mongosh

```
use demo
db.createCollection("items")
db.items.insertOne({
  name: "Laptop",
  price: 1200,
  category: "electronics",
  stock: 30
})
```