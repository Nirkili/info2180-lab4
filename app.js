$(document).ready(function(){
    //variables to be used
    let button =$("#search");
    const php_req = new XMLHttpRequest();
    let php_file = "http://localhost/info2180-lab4/superheroes.php";

    //Message if request is successful
    function Handle_Req(){
        if(php_req.readyState == XMLHttpRequest.DONE){
            if(php_req.status == 200){
                alert(php_req.responseText);
            }
            else{
                alert("There was an issue with the request.");
            }
        }
    }

    //button listener
    button.click(function() {
        php_req.onreadystatechange = Handle_Req;
        php_req.open('GET', php_file);
        php_req.send();
    });

});

