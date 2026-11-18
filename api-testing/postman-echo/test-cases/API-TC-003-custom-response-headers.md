# API-TC-003: Verify Custom Response Headers

## Environment
- **API:** Postman Echo
- **Endpoint:** https://postman-echo.com/response-headers
- **Method:** GET
- **Tool:** Postman

## Preconditions
- Postman Echo API is accessible.

## Steps to Execute
1. Open Postman and create a new request.
2. Select the GET method.
3. Enter `https://postman-echo.com/response-headers`.
4. Open the Params tab.
5. Add a query parameter with test-header as the key and Hello QA as the value.
6. Click **Send**.
7. Observe the response status code and body and headers.

## Expected Result
- The API should return a `200 OK` status code.
- The response body should contain test-header with the value Hello QA.
- The response headers should contain Test-Header with the value Hello QA.
        
## Actual Result
- The API returned a `200 OK` status code.
- The response body contained test-header with the value Hello QA.
The response headers contained Test-Header with the value Hello QA.

## Test Result
Pass  

## Screenshots 
**Screenshot 1:** GET request showing the query parameter and response body.
<img width="1868" height="890" alt="image" src="https://github.com/user-attachments/assets/c6da1a34-2446-4bdf-b126-008072d881c6" />

**Screenshot 2:** Response Headers tab showing the custom Test-Header and its value.
<img width="1860" height="1510" alt="image" src="https://github.com/user-attachments/assets/7f769bcb-3675-4fb3-806f-a2f62d98ca2b" />
