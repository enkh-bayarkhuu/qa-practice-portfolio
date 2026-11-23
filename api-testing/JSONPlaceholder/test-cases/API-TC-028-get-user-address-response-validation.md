# API-TC-028: Verify GET User Address Response Data Using Postman Tests

## Environment
- **API:** JSONPlaceholder
- **Endpoint:** https://jsonplaceholder.typicode.com/users/2
- **Method:** GET
- **Tool:** Postman
  
# Preconditions
JSONPlaceholder API is accessible.  

## Steps to Execute
1. Open Postman and create a new request.
2. Select the GET method.
3. Enter `https://jsonplaceholder.typicode.com/users/2`.
4. Open the Scripts tab and select After response.
5. Add the following JavaScript tests:
```js
const response = pm.response.json();

pm.test("Address object exists", function () {
    pm.expect(response.address).to.be.an("object");
});
pm.test("Street is not empty", function () {
    pm.expect(response.address.street).to.not.be.empty;
});
pm.test("City is Gwenborough", function () {
    pm.expect(response.address.city).to.eql("Wisokyburgh");
});
pm.test("Zipcode is a string", function () {
    pm.expect(response.address.zipcode).to.be.a("string");
});
pm.test("Geo object exists", function () {
    pm.expect(response.address.geo).to.be.an("object");
});
pm.test("Latitude is a string", function () {
    pm.expect(response.address.geo.lat).to.be.a("string");
});
pm.test("Longitude is a string", function () {
    pm.expect(response.address.geo.lng).to.be.a("string");
});
```
6. Click Send to execute the request and run the tests.
7. Review the test results and response body.

## Expected Results
- The response contains an address object.
- The street field is not empty.
- The city is `Wisokyburgh`.
- The zipcode is a string.
- The response contains a geo object.
- The latitude and longitude fields are strings.

## Actual Results
- All seven tests passed successfully in Postman.
- The response matched the expected results.

## Test Result
**Passed**

## Screenshot

**Screenshot 1:** Postman test results showing all seven automated checks passed successfully.
<img width="1684" height="1560" alt="image" src="https://github.com/user-attachments/assets/a7a4f870-3593-4937-99c7-d6be7b026a14" />
