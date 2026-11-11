# API-TC-017: Verify DELETE Request With Non-Existent Post ID

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/posts/1000
- **Method:** DELETE
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the GET method.
3. Enter `https://jsonplaceholder.typicode.com/posts/1000`.
4. Click Send.
5. Observe the response status code and body.
6. Change the method to DELETE.
7. Click Send.
8. Examine the response status code and body.

## Expected Result
- The API should return a `404 Not Found` status code because post ID 1000 does not exist.
- The response should indicate that the requested post was not found.

## Actual Result
- The API returned a `200 OK` status code.
- The response indicated that the DELETE request was successful, even though post ID 1000 does not exist.
       
## Test Result
Fail  

## Screenshots
**Screenshot 1:** GET request showing that post ID 1000 does not exist.
<img width="1970" height="878" alt="image" src="https://github.com/user-attachments/assets/a7ffac1c-aff3-4c74-a28a-1f21263e19cf" />

**Screenshot 2:** DELETE request showing the successful response.
<img width="1974" height="894" alt="image" src="https://github.com/user-attachments/assets/6e92f8f9-7453-408f-b9de-5382b74e1828" />
