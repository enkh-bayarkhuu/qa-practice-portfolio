# API-TC-026: Verify Retrieving Posts With an Empty Query Parameter

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/posts?userId=
- **Method:** GET
- **Tool:** Postman
  
## Steps to Execute
1. Open Postman and create a new request.
2. Select the GET method.
3. Enter `https://jsonplaceholder.typicode.com/posts?userId=`.
4. Click **Send**.
5. Observe the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The response body should contain an empty array ([]).

## Actual Result
- The API returned a `200 OK` status code.
- The response body contained an empty array ([]).
     
## Test Result
Pass  

## Screenshot 
**Screenshot 1:** GET request showing the response status code and body.
<img width="1970" height="950" alt="image" src="https://github.com/user-attachments/assets/d0dc7391-9e51-44a0-9a48-531346b0bfd1" />
