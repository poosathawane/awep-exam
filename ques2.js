function fun() {
    var x = document.getElementById("nameid").value
    if (x == "") {
        alert("name must be filled";)
    }
    var y = document.getElementById("passwordid").value
    if (y == "") {
        alert("name must be filled";)
    }
    var a = document.getElementById("nameid").value;
    var b = document.getElementById("passwordid").value;
    var c = document.getElementById("displayform").value;
    c.textcontent = username is: "+a+"
    password is: "+b+"
    document.getElementById("nameid").value = "";
    document.getElementById("passwordid").value = "";

}
