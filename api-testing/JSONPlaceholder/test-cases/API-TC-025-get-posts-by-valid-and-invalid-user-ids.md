# API-TC-025: Verify Retrieving Posts With Valid and Invalid User IDs

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/posts?userId=1&userId=1000
- **Method:** GET
- **Tool:** Postman

## Preconditions
- User ID `1` exists and has associated posts.
- User ID `1000` does not exist.
  
## Steps to Execute
1. Open Postman and create a new request.
2. Select the GET method.
4. Enter `https://jsonplaceholder.typicode.com/posts?userId=1&userId=1000`.
5. Click Send.
6. Observe the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The response body should contain posts belonging to user ID 1 only.

## Actual Result
- The API returned a `200 OK` status code.
- The response body contained posts belonging to user ID 1.
     
## Test Result
Pass  

## Screenshot 
**Screenshot 1:** GET request showing the response status code and body.
 <img width="931" height="723" alt="image" src="https://github.com/user-attachments/assets/b2903f21-0110-480a-b0dc-6b9903fd7084" />
