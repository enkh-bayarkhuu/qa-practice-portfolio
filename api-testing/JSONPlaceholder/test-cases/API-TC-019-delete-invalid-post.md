# API-TC-019: Verify DELETE Request With Invalid Post ID Format

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/posts/ok
- **Method:** DELETE
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the DELETE method.
3. Enter `https://jsonplaceholder.typicode.com/posts/ok`
4. Click Send.
5. Examine the response status code and body.

## Expected Result
- The API should return a `404 Not Found` status code because the post ID format is invalid.
- The response should indicate that the request was unsuccessful.
  
## Actual Result
- The API returned a `200 OK` status code.
- The response contained an empty JSON object.
     
## Test Result
Fail  

## Screenshot
**Screenshot 1:** DELETE request with an invalid post ID showing the response.
<img width="1972" height="902" alt="image" src="https://github.com/user-attachments/assets/e1c774aa-247a-4926-ac13-8438fb62395b" />
