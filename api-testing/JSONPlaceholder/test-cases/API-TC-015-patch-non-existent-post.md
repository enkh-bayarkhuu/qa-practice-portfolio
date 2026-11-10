# API-TC-015: Verify PATCH Request With Non-Existent Post ID

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/posts/1000
- **Method:** PATCH
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the GET method.
3. Enter `https://jsonplaceholder.typicode.com/posts/1000`.
4. Click Send.
5. Observe the response status code and body.
6. Change the method to PATCH.
7. Open the Body tab and select raw with JSON format.
8. Enter the following JSON data:
```json
{
    "title": "Updating a post with ID 1000"
}
```
9. Click Send.
10. Examine the response status code and body.

## Expected Result
- The API should return a `404 Not Found` status code because post ID 1000 does not exist.
- The response should indicate that the requested post was not found.

## Actual Result
- The API returned a `200 OK` status code.
- The response contained the updated title submitted in the request, even though post ID 1000 does not exist.
     
## Test Result
Fail  

## Screenshots
**Screenshot 1:** GET request showing that post ID 1000 does not exist.
<img width="1978" height="840" alt="image" src="https://github.com/user-attachments/assets/db110159-44f8-4685-9ecd-b75269f810b8" />

**Screenshot 2:** PATCH request showing the submitted title in the response.
<img width="1970" height="862" alt="image" src="https://github.com/user-attachments/assets/9d7663ab-fd56-4915-a730-cdc1476a306f" />
