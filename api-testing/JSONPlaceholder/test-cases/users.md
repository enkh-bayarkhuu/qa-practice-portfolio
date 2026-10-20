# API-TC-001: Verify Retrieving All Users

## Environment
- API: JSONPlaceholder
- Endpoint: https://jsonplaceholder.typicode.com/users
- Method: GET
- Tool: Postman

## Steps to Execute
1. Open Postman.
2. Open a new request tab.
3. Select the GET method.
4. Enter `https://jsonplaceholder.typicode.com/users`.
5. Click Send.
6. Examine the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The response body should contain a JSON array of users.
- Each user should contain expected fields, such as `id`, `name`, `username`, and `email` and `address`.

## Actual Result
The API returned a `200 OK` status code. The response body contained JSON array of users, and the user objects included the expected fields.

## Test Result
Pass  

## Screenshot
<img width="1097" height="934" alt="image" src="https://github.com/user-attachments/assets/103b8ce1-3875-47a8-89dd-2359e15a7bee" />
