function reqListener () {
    let useremails = (oReq.response);
    sortNames(useremails)
}
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://jsonplaceholder.typicode.com/users");
oReq.responseType = "json";
oReq.send();
function sortNames(data){
    let emails = new Array();
    for (let i=0, len=data.length; i<len; i++) {
        emails.push(' '+'"'+data[i].email+'"')
    }
    emails.sort();
    document.getElementById('XMLreq').innerHTML = emails;
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        fetchSort(myJson);
    });
function fetchSort(data){
    let usernames = new Array();
    for (let i=0, len=data.length; i<len; i++){
        usernames.push(' '+'"'+data[i].username+'"')
    }
    usernames.sort(function(a, b){
    return a.length - b.length;
    });
    document.getElementById('fetch').innerHTML = usernames;
}