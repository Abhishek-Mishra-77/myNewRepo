// GET REQUEST
function getTodos() {
    console.log("GET REQUEST");
}

// POST REQUEST
function addTodo() {
    console.log("POST REQUEST");
}

// PUT / PATCH REQUEST
function updateTodo() {
    console.log("PUT/ PATCH REQUEST");
}

// DELETE REQUEST
function removeTodo() {
    console.log("DELETE REQUEST");
}

// SIMULTANEOUS DATA
function getData() {
    console.log("SIMULTANEOUS REQUEST");
}

// CUSTOM HEADERS
function customHeaders() {
    console.log("CUSTOM HEADERS");
}

//TRANSFORMING REQUEST & RESPONSE
function transformResponse() {
    console.log("TRANSFORMING REQUEST & RESPONSE");
}

//ERROR HANDLING
function errorHandling() {
    console.log("Error Handling");
}

//CANCEL TOKEN
function cancelToken() {
    console.log("cancel Token");
}

// // INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in broweser
function showOutput(res) {
    document.getElementById("res").innerHTML = `
    <div class='card card-body mb-4'>
    <h5>Status:${res.status}</h5>
    </h5>

    <div class= ""card mt-3">
    <div class= "card-header">
    Headers
    </div>
    <div class="card-body">
    <prev> ${JSON.stringify(res.headers, null, 2)} </prev>
    </div>
   </div>

   <div class="card mt-3">
   <div class="card-header">
     Data
   </div>
   <div class="card-body">
     <pre>${JSON.stringify(res.data, null, 2)}</pre>
   </div>
 </div>

 <div class="card mt-3">
   <div class="card-header">
     Config
   </div>
   <div class="card-body">
     <pre>${JSON.stringify(res.config, null, 2)}</pre>
   </div>
 </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
    .getElementById("tranform")
    .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
