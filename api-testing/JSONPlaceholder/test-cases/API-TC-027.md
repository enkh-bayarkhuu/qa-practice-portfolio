# API-TC-027: Verify GET User Response Data Using Postman Tests

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/users/1
- **Method:** GET
- **Tool:** Postman
  
# Preconditions
JSONPlaceholder API is accessible.  

## Steps to Execute
1. Open Postman and create a new request.
2. Select the GET method.
3. Enter `https://jsonplaceholder.typicode.com/users/1`.
4. Open the Scripts tab and select After response.
5. Add the following JavaScript tests:
```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is JSON", function () {
    pm.response.to.be.json;
});

pm.test("User ID is 1", function () {
    const response = pm.response.json();
    pm.expect(response.id).to.eql(1);
});

pm.test("User name is Leanne Graham", function () {
    const response = pm.response.json();
    pm.expect(response.name).to.eql("Leanne Graham");
});

pm.test("Email field is not empty", function () {
    const response = pm.response.json();
    pm.expect(response.email).to.not.be.empty;
});
```
6. Click Send to execute the request and run the tests.
7. Review the test results and response body.

## Expected Result
- The API returns status code 200 OK.
- The response is in JSON format.
- The returned user ID is 1.
- The returned user name is Leanne Graham.
- The email field contains a non-empty value.

## Actual Result
- All five tests passed successfully in Postman.
- The response matched the expected results.
     
## Test Result
Pass  

## Screenshot 
**Screenshot 1:** Postman test results showing all five automated checks passed successfully.
<img width="2218" height="1464" alt="image" src="https://github.com/user-attachments/assets/5cd64cb2-7cf5-489e-b1ee-76bf9c328b55" />
