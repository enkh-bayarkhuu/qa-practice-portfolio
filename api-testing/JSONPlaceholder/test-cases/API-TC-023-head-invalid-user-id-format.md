# API-TC-022: Verify HEAD Request With Invalid User ID Format

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/users/ok
- **Method:** HEAD
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the HEAD method.
3. Enter `https://jsonplaceholder.typicode.com/users/ok`.
4. Click Send.
5. Observe the response status code and body.

## Expected Result
- The API should return a `404 Not Found` status code because the user ID is not in the expected numeric format.
- The response body should be empty.

## Actual Result
- The API returned a `404 Not Found` status code.
- The response body was empty.
     
## Test Result
Pass  

## Screenshot 
**Screenshot 1:** HEAD request showing the response.
 <img width="931" height="384" alt="image" src="https://github.com/user-attachments/assets/65d51654-121a-4f08-a9a4-ec270861311c" />

 
