# API-TC-001: Verify Custom Request Header

## Environment
- **API:** Postman Echo
- **Endpoint:** https://postman-echo.com/headers
- **Method:** GET
- **Tool:** Postman

## Preconditions
- Postman Echo API is accessible.

## Steps to Execute
1. Open Postman and create a new request.
2. Select the GET method.
3. Enter `https://postman-echo.com/headers`.
4. Open the Headers tab.
5. Add a custom header with the key sample-header and value QA.
6. Click **Send**.
7. Observe the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The response body should contain the custom request header sample-header with the value QA.
  
## Actual Result
- The API returned a `200 OK` status code.
- The response body contained the custom request header sample-header with the value QA.
      
## Test Result
Pass  

## Screenshot 
**Screenshot 1:** GET request showing the custom header and response.
<img width="1976" height="1376" alt="image" src="https://github.com/user-attachments/assets/84598c19-aef2-4721-949c-86f3226837ec" />

