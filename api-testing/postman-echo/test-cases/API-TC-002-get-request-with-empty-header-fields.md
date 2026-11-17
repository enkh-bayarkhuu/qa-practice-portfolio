# API-TC-002: Verify GET Request With Empty Header Fields

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
5. Add a new header row, leave both the key and value fields empty, and make sure the checkbox beside the row is checked.
6. Click **Send**.
7. Observe the response status code and body.

## Expected Result
- The API should return a `200 OK` status code.
- The response body should not contain a custom header with an empty key and value.
- The GET request should still execute successfully.
    
## Actual Result
- The API returned a `200 OK` status code.
- The response body did not contain a new custom header.

## Test Result
Pass  

## Screenshot 
**Screenshot 1:** GET request showing the enabled empty header row and response.
<img width="1974" height="1302" alt="image" src="https://github.com/user-attachments/assets/b9e80747-07b6-436d-b8c7-d4aadaf4f0c4" />
