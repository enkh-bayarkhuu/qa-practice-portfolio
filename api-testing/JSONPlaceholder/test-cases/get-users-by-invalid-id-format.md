# API-TC-005: Verify Retrieving a User with Invalid ID Format

## Environment
- API: JSONPlaceholder
- Endpoint: https://jsonplaceholder.typicode.com/users/abc
- Method: GET
- Tool: Postman

## Steps to Execute
1. Open Postman.
2. Open a new request tab.
3. Select the GET method.
4. Enter `https://jsonplaceholder.typicode.com/users/abc`.
5. Click Send.
6. Examine the response status code and body.

## Expected Result
- The API should return a `404 Not Found` status code.
- The response body should contain an empty object ({}).

## Actual Result
- The API returned a `404 Not Found` status code.
- The response body contained an empty object ({}).
  
## Test Result
Pass  

## Screenshot
<img width="2438" height="830" alt="image" src="https://github.com/user-attachments/assets/dfa00de5-5ab8-49d7-b4c0-5d1be6c7ccd7" />
