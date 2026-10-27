# API-TC-002: Verify Retrieving a User by ID

## Environment
- API: JSONPlaceholder
- Endpoint: https://jsonplaceholder.typicode.com/users/3
- Method: GET
- Tool: Postman

## Steps to Execute
1. Open Postman and create a new request.
3. Select the GET method.
4. Enter `https://jsonplaceholder.typicode.com/users/3`.
5. Click Send.
6. Examine the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The response body should contain a JSON array of user with ID 3.
- The user object should contain the expected fields, such as id, name, username, and email.

## Actual Result
The API returned a `200 OK` status code. The response body contained a single user object with ID 3 and the expected fields.

## Test Result
Pass  

## Screenshot
<img width="1438" height="755" alt="image" src="https://github.com/user-attachments/assets/8bb76fb0-0f7a-41c4-a347-28f02de5a3cd" />
