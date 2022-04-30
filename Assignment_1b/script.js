
function submitForm() {
        const username = document.getElementById("username").value;
        const city = document.getElementById("city").value;
        const age = document.getElementById("age").value;

        // console.log(username);
        const user = {
            "username": username,
            "city": city,
            "age": age
        };
        // alert(user[0]);

        let postObj = JSON.stringify(user);
        // alert(postObj);
        let obj = new XMLHttpRequest()

        obj.open("post", 'userData.json')

        obj.onload = function() {
            localStorage.setItem("data", postObj);
        }

        obj.send();
        // alert(postObj);
    }


    function viewData() {
        keys = Object.keys(localStorage);
        console.log(keys);
    }

    // function viewData() {

    //     keys = Object.keys(localStorage),
    //     i = keys.length;
    
    //     var str = "<table><tr><th>Fname</th><th>Lname</th><th>Age</th></tr>"
    
    //     while ( i-- ) {
    
    //     str = str + "<tr>"
    
    //     item = localStorage.getItem(keys[i])
        
    
    //     item = JSON.parse(item)
        
    //     // console.log(item.fname)
            
    //     // console.log(item)
    
    //     str = str + "<td>" + item.fname + "</td>";
    //     str = str + "<td>" + item.lname + "</td>";
    //     str = str + "<td>" + item.age + "</td>";
    
    //     str = str + "</tr>"
    //     alert(item)
    
    //     }
    
    //     document.getElementById("content").innerHTML = str;
    // }























    // // Create an event listener
// document.getElementById("myButton").addEventListener("click", loadText);

// function loadText() {
//     // alert("button clicked");
//     // Create XHR Object
//     var xhr = new XMLHttpRequest();
//     // console.log(xhr);
//     var username = document.getElementById("username").innerHTML;
//     var passsword = document.getElementById("password").innerHTML;

//     // OPEN - type, url/filename, async
//     // xhr.open("GET", "sample.txt", true);

//     xhr.onload = function() {
//         // 200 - okay
//         // 403 - Firbidden
//         // 404 - Not found
//         if(this.status == 200) {
//             // console.log(this.responseText);
//             document.getElementById("text").innerHTML = this.responseText;
//             // alert(username);

//         }
//     }

//     // Sends request
//     xhr.send();
// }
