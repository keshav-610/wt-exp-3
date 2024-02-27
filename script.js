function validate(){
    const x = document.getElementById("name").value;
    if(x==""){
        alert("Please Enter your name!!");
        return false;
    }
    else{
        alert("Welcome "+x);
        return true;
    }
}