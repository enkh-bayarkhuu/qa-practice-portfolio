# API-TC-020: Verify HEAD Request for Existing User

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/users/2
- **Method:** HEAD
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the HEAD method.
3. Enter `https://jsonplaceholder.typicode.com/users/2`.
4. Click Send.
5. Examine the response status code and body.

## Expected Result
- The API should return a `200 OK` status code because the user with ID 2 exists.
- The response body should be empty.
  
## Actual Result
- The API returned a `200 OK` status code.
- The response was empty.
     
## Test Result
Pass  

## Screenshot
**Screenshot 1:** HEAD request with a valid user ID showing the response.
<img width="1986" height="972" alt="image" src="https://github.com/user-attachments/assets/145a35ed-fa25-4af2-bec3-8fdf3bce32b8" />
