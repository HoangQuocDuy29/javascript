// Fetch API
const response = fetch("http://localhost:8000/posts")
// Handle the response
//console.log(response);
// response
//     // Convert to JSON
//     .then(data => data.json())
//     // Handle the JSON data
//     .then(posts => console.log(posts))
//     .catch(err => console.log(err));

.then(response => {
    console.log("Response object:", response);
    return response.json();
})
.then(data => {
    console.log("Data:", data);
})
.catch(err => {
    console.log("Error:", err);
});