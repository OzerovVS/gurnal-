var names = []

function g(){
    if (document.getElementById("s2").style.display != "flex"){
        document.getElementById("s2").style.display = "flex" 
        document.getElementById("s1").style.display = "none" 
    }
    else{
        document.getElementById("s2").style.display = "none" 
        document.getElementById("s1").style.display = "flex" 
    }
}
function auth(){
    if(document.getElementById("input_login").value != "" && document.getElementById("input_password").value != ""){
        names.push(document.getElementById("input_login").value)
        alert(names[0])
        document.getElementById("lab").value = names[0]
    }
    else{
        alert("Не все поля заполнены!")
    }
}