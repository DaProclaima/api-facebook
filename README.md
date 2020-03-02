# Facebook-Api ⚡
## User api
Crud API for all users
#### [POST] Create user 
Allows the creation of a single user.
|User|Api|
|---|---|
|Require autenthification |No|
|Who can use it |Everybody|
|Response formats |Application/JSON|

- HTTP request : POST → user/create
#### Parameters
```javascript
{
    'first_name': 'Alexandre', // optionnal
    'last_name': 'Houmeau', // optionnal
    'email': 'Alexandre@gmail.com', // required
    'password': '123456789', // required
    'age': 23, // optionnal
    'gender': 'm', // optionnal,
    'height': 1.75, // optionnal
    'weight': 80, // optionnal
    'city': 'Paris', // optionnal
    'city_code': '75009', // optionnal
    'street_number': 13, // optionnal
    'street_type': 'rue', // optionnal
    'street_name': 'de cambrai', // optionnal
    'phone': '0651448017', // optionnal
    'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg' // optionnal
}
```

#### Response
``` javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Alexandre',
  'last_name': 'Houmeau',
  'email': 'Alexandre@gmail.com',
  'password': '123456789',
  'token': 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
  'age': 23,
  'gender': 'm',
  'height': 1.75,
  'weight': 80,
  'city': 'Paris',
  'cityCode': '75000',
  'street_number': 13,
  'street_type': 'rue',
  'street_name': 'de cambrai',
  'phone': '0651448017',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```
---
#### [GET] Show user 
Show a single user by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : GET -> user/show/:id
- Header request: token: Valid user token
 
#### Parameters
    user/show/12483hdhd2838
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Alexandre',
  'last_name': 'Houmeau',
  'email': 'Alexandre@gmail.com',
  'password': '123456789',
  'token': 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
  'age': 23,
  'gender': 'm',
  'height': 1.75,
  'weight': 80,
  'city': 'Paris',
  'cityCode': '75000',
  'street_number': 13,
  'street_type': 'rue',
  'street_name': 'de cambrai',
  'phone': '0651448017',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```

---
#### [Update] update user 
Update a single user by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : PUT -> user/update/:id
- Header request: token: Valid user token
 
#### Parameters
    user/update/12483hdhd2838
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
```javascript
{
    'first_name': 'Bertrand',
    'last_name': 'Guy'
}
```
#### Response
``` javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Bertrand',
  'last_name': 'Guy',
  'email': 'Alexandre@gmail.com',
  'password': '123456789',
  'token': 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
  'age': 23,
  'gender': 'm',
  'height': 1.75,
  'weight': 80,
  'city': 'Paris',
  'cityCode': '75000',
  'street_number': 13,
  'street_type': 'rue',
  'street_name': 'de cambrai',
  'phone': '0651448017',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```

---
#### [Delete] Delete user 
Delete a single user by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : DELETE -> user/delete/:id
- Header request: token: Valid user token
 
#### Parameters
    user/show/12483hdhd2838
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
  'id': '12483hdhd2838',
  'first_name': 'Alexandre',
  'last_name': 'Houmeau',
  'email': 'Alexandre@gmail.com',
  'password': '123456789',
  'token': 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
  'age': 23,
  'gender': 'm',
  'height': 1.75,
  'weight': 80,
  'city': 'Paris',
  'cityCode': '75000',
  'street_number': 13,
  'street_type': 'rue',
  'street_name': 'de cambrai',
  'phone': '0651448017',
  'image_profil': 'https://www.mediacritik.com/wp-content/uploads/2019/04/rs_1024x759-170407142939-1024.Peter-Dinklage-Game-of-Thrones.kg_.040717.jpg'
}
```


## Event api
Crud API for all Events
#### [POST] Create event 
Allows the creation of a single event.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : POST -> event/create
#### Parameters
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
```javascript
{
    'title': 'Event_name_2020', // require
    'description': 'Super event for 2020', // optionnal
    'location': 'The Event place', // required
    'cover_photo': 'http://event-photo.jpeg', // required
    'public': false, // optionnal
    'participants': 12483hdhd2838, // optionnal
    'created_at': Date.now // automatic
}
```

#### Response
``` javascript
{
    'id': 'kdjs65qkjd76shdg9'
    'title': 'Event_name_2020',
    'description': 'Super event for 2020',
    'location': 'The Event place',
    'cover_photo': 'http://event-photo.jpeg',
    'public': false, 
    'admin': '12483hdhd2838' // automatic when creating -> take the user token to find user in db
    'participants': 12483hdhd2838, 
    'created_at': Date.now 
}
```
---
#### [GET] Show event 
Show a single event by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : GET -> user/event/:id
- Header request: token: Valid user token
 
#### Parameters
    user/event/kdjs65qkjd76shdg9
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
    'id': 'kdjs65qkjd76shdg9'
    'title': 'Event_name_2020',
    'description': 'Super event for 2020', 
    'location': 'The Event place', // required
    'cover_photo': 'http://event-photo.jpeg',
    'public': false, 
    'admin': '12483hdhd2838' 
    'participants': 12483hdhd2838, 
    'created_at': Date.now 
}
```

---
#### [Update] update event 
Update a single event by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : PUT -> user/update/:id
- Header request: token: Valid user token
 
#### Parameters
    event/update/kdjs65qkjd76shdg9
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'
```javascript
{
    'admin': '['sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf']'
}
```
#### Response
``` javascript
{
    'id': 'kdjs65qkjd76shdg9'
    'title': 'Event_name_2020', 
    'description': 'Super event for 2020', 
    'location': 'The Event place',
    'cover_photo': 'http://event-photo.jpeg',
    'public': false,
    'admin': ['12483hdhd2838', 'sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf'] 
    'participants': 12483hdhd2838,
    'created_at': Date.now 
}
```

---
#### [Delete] Delete event 
Delete a single event by ID.
|User|Api|
|---|---|
|Require autenthification |Yes|
|Who can use it |User only|
|Response formats |Application/JSON|

- HTTP request : DELETE -> event/delete/:id
- Header request: token: Valid user token
 
#### Parameters
    event/show/kdjs65qkjd76shdg9
    token: 'Y9Y1lusRUNVfKnv75yFUXw4wpo1OwK0HYd0RSVEkaaNCvz6oLNTT49m2Mix9sFHLwxeYWPUsgXxdhQYS80MgEE9Sljuq9VctHvdm'

#### Response
``` javascript
{
    'id': 'kdjs65qkjd76shdg9'
    'title': 'Event_name_2020', 
    'description': 'Super event for 2020', 
    'location': 'The Event place',
    'cover_photo': 'http://event-photo.jpeg',
    'public': false,
    'admin': ['12483hdhd2838', 'sf4546sdf54654', 'sdf53s4d3546s4df3', 'dsf5s43df54sdf'] 
    'participants': 12483hdhd2838,
    'created_at': Date.now 
}
```
