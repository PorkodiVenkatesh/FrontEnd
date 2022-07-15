var divElmt = document.getElementById("demo");
var tableElmt = document.createElement("table");


var trElmt = document.createElement("tr");

var id_th = document.createElement("th");
id_th.innerHTML = "ID"
trElmt.appendChild(id_th)

var name_th = document.createElement("th");
name_th.innerHTML = "Name"
trElmt.appendChild(name_th)

var username_th = document.createElement("th");
username_th.innerHTML = "UserName"
trElmt.appendChild(username_th)

var email_th = document.createElement("th");
email_th.innerHTML = "Email"
trElmt.appendChild(email_th)

var phone_th = document.createElement("th");
phone_th.innerHTML = "Phone"
trElmt.appendChild(phone_th)


tableElmt.appendChild(trElmt);
divElmt.appendChild(tableElmt);