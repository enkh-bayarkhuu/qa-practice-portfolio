# API-TC-011: Verify Whether a Custom ID Can Be Assigned

## Environment
- API: JSONPlaceholder
- Endpoint: https://jsonplaceholder.typicode.com/users
- Method: POST
- Tool: Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the POST method.
3. Enter `https://jsonplaceholder.typicode.com/users`.
4. Open the body tab and select raw with JSON format.
5. Enter the following JSON data:
```json
{
    "name": "Check id",
    "username": "check.id",
    "email": "checkid@example.com",
    "id": 20
}
```
6. Click Send.
7. Examine the response status code and body.

## Expected Result
- The API should return a `201 Created` status code.
- The response should contain the submitted user information.
- The API should assign its own ID instead of using the custom ID (20) provided in the request.
## Actual Result
- The API returned a `201 Created` status code.
- The response contained the submitted name, username, and email.
- The API assigned ID 11 instead of the custom ID (20).
  
## Test Result
Pass  

## Screenshot
<img width="2594" height="1234" alt="image" src="https://github.com/user-attachments/assets/da3a7276-ef07-423e-8f08-49f6bf6d55c8" />

