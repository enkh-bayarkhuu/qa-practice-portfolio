# API-TC-022: Verify HEAD Request Without Specifying User ID

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/users 
- **Method:** HEAD
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the GET method.
3. Enter `https://jsonplaceholder.typicode.com/users`.
4. Click Send.
5. Observe the response status code and body.
6. Change the method to HEAD.
7. Click Send.
8. Examine the response status code and body.

## Expected Result
- The API should return a `200 OK` status code because users are available.
- The response body should be empty.

## Actual Result
- The API returned a `200 OK` status code.
- The response body was empty.
     
## Test Result
PASS  

## Screenshots
**Screenshot 1:** GET request showing the list of users.
 <img width="930" height="613" alt="image" src="https://github.com/user-attachments/assets/63195a7e-a5e6-4449-8a62-4b046540b09a" />

**Screenshot 2:** HEAD request showing the response.
<img width="931" height="580" alt="image" src="https://github.com/user-attachments/assets/5c8f91f4-fb18-4a8b-942f-e38fba1209fe" />

 
