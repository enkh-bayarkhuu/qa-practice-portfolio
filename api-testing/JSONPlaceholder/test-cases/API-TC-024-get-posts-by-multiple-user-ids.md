# API-TC-024: Verify Retrieving Posts by Multiple User IDs

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/posts?userId=1&userId=2
- **Method:** GET
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the GET method.
3. Enter `https://jsonplaceholder.typicode.com/posts?userId=1&userId=2`.
4. Click Send.
5. Observe the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The response body should contain posts belonging to user IDs 1 and 2.

## Actual Result
- The API returned a `200 OK` status code.
- The response body contained posts belonging to user IDs 1 and 2.
     
## Test Result
Pass  

## Screenshot 
**Screenshot 1:** GET request showing the response status code and body.
<img width="930" height="725" alt="image" src="https://github.com/user-attachments/assets/9bcdccba-b30f-41af-94b0-ea05a93832fa" />

 
 
