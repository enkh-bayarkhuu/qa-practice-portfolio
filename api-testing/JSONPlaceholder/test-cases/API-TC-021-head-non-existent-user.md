# API-TC-021: Verify HEAD Request With Non-Existent User

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/users/999
- **Method:** HEAD
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the GET method.
3. Enter `https://jsonplaceholder.typicode.com/users/999`.
4. Click Send.
5. Observe the response status code and body.
6. Change the method to HEAD.
7. Click Send.
8. Examine the response status code and body.

## Expected Result
- The API should return a `404 Not Found` status code because user ID 999 does not exist.
- The response should indicate that the requested user was not found.

## Actual Result
- The API returned a `404 Not Found` status code.
- The response body was empty.
     
## Test Result
PASS  

## Screenshots
**Screenshot 1:** GET request showing that user ID 999 does not exist.
<img width="1972" height="904" alt="image" src="https://github.com/user-attachments/assets/08cc12d9-0dce-4f8c-82df-39545b4b7789" />

**Screenshot 2:** HEAD request showing the response for the non-existent user.
<img width="1974" height="940" alt="image" src="https://github.com/user-attachments/assets/c221e298-cad2-4342-a096-c844e7d3665b" />
