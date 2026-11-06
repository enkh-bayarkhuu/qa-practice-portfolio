# API-TC-012: Verify Put Replaces The Existing Resource

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/posts/1
- **Method:** PUT
- **Tool:** Postman

## Steps to Execute
1. Open Postman and create a new request.
2. Select the Get method.
3. Enter `https://jsonplaceholder.typicode.com/posts/1`
4. Click Send.
5. Observe the original post information.
6. Change the method to PUT.
7. Open the Body tab and select raw with JSON format.
8. Enter the following JSON data:
```json
{
    "userId": 1,
    "id": 1,
    "title": "My Updated First Post",
    "body": "This is the updated content of my first post using a PUT request."
}
```
6. Click Send.
7. Examine the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The response should contain the submitted information, replacing the previous post data.
  
## Actual Result
- The API returned a `200 OK` status code.
- The response contained the submitted information, replacing the previous post data.
  
## Test Result
Pass  

## Screenshot
**Screenshot 1:** Get request showing the original post information.
<img width="1976" height="1138" alt="image" src="https://github.com/user-attachments/assets/da287279-373a-404f-abd3-442aaa43fb36" />

**Screenshot 2** Post request showing the updated post information.
<img width="1970" height="1082" alt="image" src="https://github.com/user-attachments/assets/bb56eac8-f32c-4c91-8c05-bf57f4f1bbf9" />
