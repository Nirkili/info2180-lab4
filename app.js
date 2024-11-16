$(document).ready(function(){
    //variables to be used
    let button =$("button");
    const php_req = new XMLHttpRequest();
    let php_file = "http://localhost/info2180-lab4/superheroes.php";
    let txt = '';

    //Message if request is successful
    function Handle_Req(){

        if(php_req.readyState == XMLHttpRequest.DONE){
            if(php_req.status == 200){
                if(php_req.responseText == "<strong>SUPERHERO NOT FOUND</strong>"){
                    $("#result").html(php_req.responseText);
                    $("#result").css("color", "red");
                }
                else{
                    $("#result").html(php_req.responseText);
                    $("#result").css("color", "black");
                }
            }
            else{
                alert("There was an issue with the request.");
            }
        }
    }

    function SendRequest(txt){
        php_req.onreadystatechange = Handle_Req;
        if(txt == ''){
            php_req.open('GET', php_file);
        }
        else{
            php_req.open('GET', php_file + "?query=" + encodeURIComponent(txt));
        }
        php_req.send();
    }

    //button listener
    button.click(function(e) {
        e.preventDefault();
        txt = $("#searchBar").val().trim();
        SendRequest(txt);
    });

    SendRequest('');


});

