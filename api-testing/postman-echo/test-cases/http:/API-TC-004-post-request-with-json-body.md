# API-TC-004: Verify POST Request With JSON Body

## Environment
- **API:** Postman Echo
- **Endpoint:** https://postman-echo.com/post
- **Method:** POST
- **Tool:** Postman

## Preconditions
- Postman Echo API is accessible.

## Steps to Execute
1. Open Postman and create a new request.
2. Select the POST method.
3. Enter `https://postman-echo.com/post`.
4. Open the Body tab, select raw, and choose JSON as the format.
5. Enter the following JSON data:
```json
{
    "name": "Enkh",
    "message": "QA"
}
```
6. Click **Send**.
7. Examine the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The request should use application/json as its Content-Type.
- The response body should contain the JSON data sent in the request.
        
## Actual Result
- The API returned a `200 OK` status code.
- The request used application/json as its Content-Type.
- The response body contained the JSON data sent in the request.
  
## Test Result
Pass  

## Screenshots
**Screenshot 1:** POST request showing the request body and response body.
<img width="1970" height="1648" alt="image" src="https://github.com/user-attachments/assets/fe2a6114-3907-4ffc-a3aa-0c3456e82706" />

**Screenshot 2:** POST request showing the request and response Content-Type.
<img width="1972" height="1714" alt="image" src="https://github.com/user-attachments/assets/d9e5f99c-319c-44c5-93be-9db761152171" />

