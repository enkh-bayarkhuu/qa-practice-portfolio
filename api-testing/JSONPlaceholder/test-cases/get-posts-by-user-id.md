# API-TC-004: Verify Retrieving Posts By User ID

## Environment
- API: JSONPlaceholder
- Endpoint: https://jsonplaceholder.typicode.com/posts?userId=1
- Method: GET
- Tool: Postman

## Steps to Execute
1. Open Postman.
2. Open a new request tab.
3. Select the GET method.
4. Enter `https://jsonplaceholder.typicode.com/posts?userId=1`.
5. Click Send.
6. Examine the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The response should contain all posts associated with User ID 1.
- Each returned post should have a userId value of 1.

## Actual Result
- The API returned a 200 OK status code.
- The response contained 10 posts associated with User ID 1.
- Each returned post had a userId value of 1.
  
## Test Result
Pass  

## Screenshot
<img width="2442" height="1548" alt="image" src="https://github.com/user-attachments/assets/d2e5a9b6-16ca-4ddf-9325-a4cd21855272" />
