# API-TC-007: Verify Retrieving a User with ID 0

## Environment
- API: JSONPlaceholder
- Endpoint: https://jsonplaceholder.typicode.com/users/0
- Method: GET
- Tool: Postman

## Steps to Execute
1. Open Postman and create a new request.
3. Select the GET method.
4. Enter `https://jsonplaceholder.typicode.com/users/0`.
5. Click Send.
6. Examine the response status code and body.

## Expected Result
- The API should return a `404 Not Found` status code.
- The response body should indicate that no user was found.

## Actual Result
- The API returned a `404 Not Found` status code.
- The response body was empty.

## Test Result
Pass  

## Screenshot
<img width="2434" height="988" alt="image" src="https://github.com/user-attachments/assets/417c1e40-e95d-4224-af71-868f01f7794f" />
