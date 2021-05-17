# Thyme

LeafReef API

The API only has one public endpoint (/api/read). Sending a GET request to this endpoint returns all sensor data.

cURL request:

```bash
curl -X GET https://leafreef.herokuapp.com/api/read
```

Example response:

```json
{
  "_id": "605ceec122cace0015a88428",
  "temperature": 23,
  "humidity": 5,
  "__v": 0
}
```

## License

This project is licensed under the terms of the [MIT](https://choosealicense.com/licenses/mit/) license.
