# API-TC-008: Verify Creating a New Post

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
5. Enter the following JSON data:
```json
{
    "title": "Yellow",
    "body": "This is my first post",
    "userId": 7
}
```
6. Click Send.
7. Examine the response status code and body.

## Expected Result
- The API should return a `201 Created` status code.
- The response body should contain the submitted post data along with a generated ID of 101.

## Actual Result
- The API returned a `201 Created` status code.
- The response body contained the submitted post data with an assigned ID of 101.

## Test Result
Pass  

## Screenshot
<img width="1219" height="535" alt="image" src="https://github.com/user-attachments/assets/12a32c82-cfdd-463a-970f-68f25faa188f" />
