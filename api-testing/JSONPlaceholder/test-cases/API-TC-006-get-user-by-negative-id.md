# API-TC-006: Verify Retrieving a User with a Negative ID

## Environment
- API: JSONPlaceholder
- Endpoint: https://jsonplaceholder.typicode.com/users/-5
- Method: GET
- Tool: Postman

## Steps to Execute
1. Open Postman.
2. Open a new request tab.
3. Select the GET method.
4. Enter `https://jsonplaceholder.typicode.com/users/-5`.
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
<img width="2442" height="1100" alt="image" src="https://github.com/user-attachments/assets/8b46e3db-c712-4a3a-a893-f2dc67ebfa0d" />
