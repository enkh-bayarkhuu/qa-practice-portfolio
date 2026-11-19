# API-TC-005: Verify POST Request With Form URL Encoded Body

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
4. Open the Body tab and select x-www-form-urlencoded as the format.
5. Enter two key-value pairs: name: Enkh and message: QA.
6. Click **Send**.
7. Examine the response status code, body and headers.

## Expected Result
- The API should return a `200 OK` status code.
- The request should use application/x-www-form-urlencoded as its Content-Type.
- The response body should contain the submitted form data with the correct field names and values.
- The response headers should contain application/json as the Content-Type.
        
## Actual Result
- The API returned a `200 OK` status code.
- The request used application/x-www-form-urlencoded as its Content-Type.
- The response body contained the submitted form data with the correct field names and values.
- The response headers contained application/json; charset=utf-8 as the Content-Type.
    
## Test Result
Pass  

## Screenshots
**Screenshot 1:** POST request showing the request body and response body.
<img width="2218" height="1660" alt="image" src="https://github.com/user-attachments/assets/134bb355-5e20-4072-9ae8-1c58ca70dd09" />

**Screenshot 2:** POST request showing the request and response Content-Type.
<img width="2212" height="1694" alt="image" src="https://github.com/user-attachments/assets/65a1a8f2-0777-47f7-a3a2-d8429f9e62a2" />
