### Operations

#### createStaff

- method: 'post'  
- path: '/staff'  

```json
{
  "Name": "Pessoa Teste",
  "Password": "PasswordDDD",
  "Rg": "54644756767",
  "Cpf": "47534575498",
  "BirthDate": "11/11/2007",
  "Address": "Rua dos bobos n 0",
  "Role": "Administrador",
  "Period": "Integral",
  "WorkDays": "Comum",
  "Email": "email@gmail.com",
  "Phone": "11986165606"
}
```

#### patchStaff

- method: 'patch'  
- path: '/staff/{id}'  

```json
{
  "Name": "Pessoa Teste",
}
```

#### loginStaff

- method: 'post'
- path: '/staff/login'

```json
{
  "Email": "email@gmail.com",
  "Password": "PasswordDDD"
}
```

