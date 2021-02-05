var studentnamesarray = [];
function submit() {
    var name1 = document.getElementById("nameofStudent1").value;
    var name2 = document.getElementById("nameofStudent2").value;
    var name3 = document.getElementById("nameofStudent3").value;
    var name4 = document.getElementById("nameofStudent4").value;

    studentnamesarray.push(name1);
    studentnamesarray.push(name2);
    studentnamesarray.push(name3);
    studentnamesarray.push(name4);
    console.log(studentnamesarray);

    document.getElementById("displayName").innerHTML = studentnamesarray;

    document.getElementById("buttonSubmit").style.display = "none";
    document.getElementById("buttonSort").style.display = "inline-block";
}

function sort() {
    studentnamesarray.sort();
    console.log(studentnamesarray);
    document.getElementById("displayName").innerHTML = studentnamesarray;
}

