## Operations

#### createPet

- method: 'post'  
- path: '/pets'  

```json
{
  "UserId": "4e997a80-f0ac-46a1-b782-aebaa1739775",
  "Name": "Cove",
  "Age": 123,
  "Sex": "1198616560",
  "Species": "1234123",
  "Race": "1234",
  "Size": "1234123",
  "Coat": "wadawdawd",
  "Disability": false
}
```

#### patchPet

- method: patch
- path: '/pets/{id}'

```json
{
  "Name": "Tadalafilo",
  "Age": 12,
  "Disability": true
}
```

#### getPet specific pet

- method: get
- path: '/pets/{id}'

``` does not need body
```
