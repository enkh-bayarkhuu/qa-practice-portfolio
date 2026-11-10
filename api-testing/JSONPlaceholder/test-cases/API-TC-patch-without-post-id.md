# API-TC-014: Verify PATCH Request Without Post ID

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/posts
- **Method:** PATCH
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the PATCH method.
3. Enter `https://jsonplaceholder.typicode.com/posts`
4. Open the Body tab and select raw with JSON format.
5. Enter the following JSON data:
```json
{
    "title": "My updated post"
}
```
6. Click Send.
7. Examine the response status code and body.

## Expected Result
- The API should return a `404 Not Found` status code.
- The response should contain an empty JSON object or array, depending on the API response.
  
## Actual Result
- The API returned a `404 Not Found` status code.
- The response contained an empty JSON object.    
## Test Result
Pass  

## Screenshot
**Screenshot 1:** PATCH request without a post ID showing the response.
<img width="1972" height="996" alt="image" src="https://github.com/user-attachments/assets/36aad5b3-df33-4db6-a9b0-99a7506fc513" />
