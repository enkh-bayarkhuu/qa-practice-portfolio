# API-TC-010: Verify Creating a Post with Invalid JSON Format

## Environment
- API: JSONPlaceholder
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Method: POST
- Tool: Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the POST method.
3. Enter `https://jsonplaceholder.typicode.com/posts`.
4. Open the body tab and select raw with JSON format.
5. Enter the following invalid JSON data:
```json
Hello
```
6. Click Send.
7. Examine the response status code and body.

## Expected Result
- The API should return a `400 Bad Request` status code.
- The response body should contain an error message indicating invalid JSON.

## Actual Result
- The API returned a `500 Internal Server Error` status code.
- The response body contained a SyntaxError indicating that the submitted data was not valid JSON.

## Test Result
Fail  

## Screenshot
<img width="1222" height="687" alt="image" src="https://github.com/user-attachments/assets/4311d4bd-f99b-4cab-91e0-36a9234a616d" />
