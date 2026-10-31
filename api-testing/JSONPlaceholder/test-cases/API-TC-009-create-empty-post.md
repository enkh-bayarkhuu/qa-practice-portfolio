# API-TC-009: Verify Creating a Post with Empty Request Body

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
5. Enter the following empty JSON object:
```json
{}
```
6. Click Send.
7. Examine the response status code and body.

## Expected Result
- The API should return a `201 Created` status code.
- The response body should contain only a generated ID of `101`.

## Actual Result
- The API returned a `201 Created` status code.
- The response body contained only an ID of `101`.

## Test Result
Pass  

## Screenshot
<img width="1224" height="531" alt="image" src="https://github.com/user-attachments/assets/70fb9e4a-44a0-451e-ba1b-9f5fd63f2bef" />

