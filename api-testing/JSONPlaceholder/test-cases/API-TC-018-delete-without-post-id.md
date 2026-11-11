# API-TC-018: Verify DELETE Request Without Post ID

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/posts
- **Method:** DELETE
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the DELETE method.
3. Enter `https://jsonplaceholder.typicode.com/posts`
4. Click Send.
5. Examine the response status code and body.

## Expected Result
- The API should return a `404 Not Found` status code because no post ID was provided.
- The response should indicate that the request was unsuccessful.
  
## Actual Result
- The API returned a `404 Not Found` status code.
- The response contained an empty JSON object.
     
## Test Result
Pass  

## Screenshot
**Screenshot 1:** DELETE request without a post ID showing the response.
<img width="1972" height="1002" alt="image" src="https://github.com/user-attachments/assets/17308f34-d62e-4992-930f-48fdddadd3a5" />
