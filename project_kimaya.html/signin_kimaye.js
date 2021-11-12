    

    function register(e){
        e.preventDefault();

        let register_form = document.getElementById("register_form");

    let first_name = register_form.firstname.value;
    let last_name = register_form.lastname.value;
    let email = register_form.email.value;
    let password = register_form.password.value;

    if(localStorage.getItem('users') === null){
        localStorage.setItem("users", JSON.stringify([]));
    }

    let user = {
        first_name,
        last_name,
        email,
        password,
    };

    let arr = JSON.parse(localStorage.getItem("users"));
    arr.push(user);

    localStorage.setItem("users", JSON.stringify(arr));
    window.location.href = "signin.html"
    }

    

    function signin(e){

        e.preventDefault();
        
        var signin = document.getElementById("signin");

        var email= signin.email.value;
        var pass = signin.password.value;

        var regdUsers = JSON.parse(localStorage.getItem("users"));
        console.log(regdUsers);
            for (var i = 0; i < regdUsers.length; i++){
                if (
                    regdUsers[i].email == email &&
                    regdUsers[i].password == pass                
           ) {
               window.location.href = "products.html";
           } 
        }
    }        