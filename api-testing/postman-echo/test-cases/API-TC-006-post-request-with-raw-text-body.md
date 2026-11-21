# API-TC-006: Verify POST Request With Raw Text Body

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
4. Open the Body tab and select **raw** with **Text** as the format.
5. Enter QA Test :) as the request body.
6. Click **Send**.
7. Examine the response status code, body and headers.

## Expected Result
- The API should return a `200 OK` status code.
- The request should use text/plain as its Content-Type.
- The response body should contain the submitted text.
- The response headers should contain application/json as the Content-Type.
        
## Actual Result
- The API returned a `200 OK` status code.
- The request used text/plain as its Content-Type.
- The response body contained the submitted text correctly.
- The response headers contained application/json; charset=utf-8 as the Content-Type.
    
## Test Result
Pass  

## Screenshots
**Screenshot 1:** POST request showing the request body and response body.
<img width="2218" height="1546" alt="image" src="https://github.com/user-attachments/assets/399be20f-d275-4ea9-9ab9-4f93df5b7b78" />

**Screenshot 2:** POST request showing the request and response Content-Type.
<img width="2214" height="1786" alt="image" src="https://github.com/user-attachments/assets/61fd93a0-8a5d-444b-9ac1-a49020f1e245" />
