// Define our key players in the code.
var data_List = document.getElementById("student_list_json");
var input = document.getElementById("search");

var newRequest = new XMLHttpRequest();

// Handle states made by the request.
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    if (request.status === 200) {
      var data = JSON.parse(request.responseText);

      //   Loop through the data and add it to the page.
      jsonOptions.foreach(function (item) {
        var option = document.createElement("option");
        option.value = item;
        //   Add the option to the datalist.
        data_List.appendChild(option);
      });

      input.placeholder = "Search for a student...";
    } else {
      input.placeholder = "Error: Could not load data.";
    }
  }
};

// Set up and make the request.
request.open("GET", "names.json", true);
request.send();
