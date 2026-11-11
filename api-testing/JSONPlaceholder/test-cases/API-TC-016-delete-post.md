# API-TC-016: Verify DELETE Request for Existing Post 

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/posts/1
- **Method:** DELETE
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the DELETE method.
3. Enter `https://jsonplaceholder.typicode.com/posts/1`
4. Click Send.
5. Examine the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The response should contain an empty JSON object.
  
## Actual Result
- The API returned a `200 OK` status code.
- The response contained an empty JSON object.
     
## Test Result
Pass  

## Screenshot
**Screenshot 1:** DELETE request for an existing post showing the response.
<img width="1974" height="924" alt="image" src="https://github.com/user-attachments/assets/b93a65cb-afa5-416c-b72c-828c7048b049" />
