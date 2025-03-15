



    let userName = document.getElementById("username-input");
    let password = document.getElementById("password-input");
    let header = document.getElementById("header")

    function handleSubmit(event) {
        event.preventDefault();

    if (userName.value.trim() === "" || password.value.trim() ==="") {
        alert("Please fill in both fields!");
        return;
    } 

    if (userName.value.length < 3 || password.value.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }

    if (userName.value === "admin" && password.value === "qwertyy") {
        header.innerText = "Success!";
        // alert("you're in");
    } else {
        header.innerText = "Incorrect";
        // alert("incorrect!");
    }
}