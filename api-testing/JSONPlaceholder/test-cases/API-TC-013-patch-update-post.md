# API-TC-013: Verify PATCH Updates Existing Post Information

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
6. Change the method to PATCH.
7. Open the Body tab and select raw with JSON format.
8. Enter the following JSON data:
```json
{
    "title": "My Updated First Post"
}
```
6. Click Send.
7. Examine the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The response should show the updated title while keeping the other original post information unchanged.
  
## Actual Result
- The API returned a `200 OK` status code.
- The response showed the updated title while keeping the other original post information unchanged.
    
## Test Result
Pass  

## Screenshot
**Screenshot 1:** Get request showing the original post information.
<img width="1980" height="1108" alt="image" src="https://github.com/user-attachments/assets/959ed033-dd93-4420-abeb-b590fb4b99fa" />

**Screenshot 2** PATCH request showing the updated post information.
<img width="1978" height="1168" alt="image" src="https://github.com/user-attachments/assets/d6f4c4b4-f6b4-4d1c-976c-e3762432b4f1" />
