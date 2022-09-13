rs.initiate(
    {_id: "rs0", version: 1,
        members: [
            { _id: 0, host : "11.2.0.12:27017" },
            { _id: 1, host : "11.2.0.11:27017" },
            { _id: 2, host : "11.2.0.10:27017" }
        ]
    }
);