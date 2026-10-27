# API-TC-003: Verify Retrieving a non-existent User by ID

## Environment
- API: JSONPlaceholder
- Endpoint: https://jsonplaceholder.typicode.com/users/99
- Method: GET
- Tool: Postman

## Steps to Execute
1. Open Postman and create a new request.
3. Select the GET method.
4. Enter `https://jsonplaceholder.typicode.com/users/99`.
5. Click Send.
6. Examine the response status code and body.

## Expected Result
- The API should return a `404 Not Found` status code.
- The response body should indicate that no user was found.

## Actual Result
The API returned a `404 Not Found` status code. The response body was empty.

## Test Result
Pass  

## Screenshot
<img width="2596" height="1060" alt="image" src="https://github.com/user-attachments/assets/ad445324-85ce-4bcd-afde-6d6e6a0fb0ba" />
