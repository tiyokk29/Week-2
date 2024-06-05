function submitData() {
    const inputName = document.getElementById("inputName").value;
    const inputEmail = document.getElementById("inputEmail").value;
    const inputPhone = document.getElementById("inputPhone").value;
    const inputSubject = document.getElementById("inputSubject").value;
    const inputMessage = document.getElementById("inputMessage").value;

    if(inputName == "" ) {
        alert("Name harus diisi");
    }
    else if(inputEmail == "" ) {
        alert("Email harus diisi");
    }
    else if(inputPhone == "" ) {
        alert("Number phone harus diisi");
    }
    else if(inputSubject == "" ) {
        alert("Subject harus diisi");
    }
    else if(inputMessage == "" ) {
        alert("Message harus diisi");
    }
    // else {
    //    alert ("jika kondisi semua telah terpenuhi")
    //}
    

    //if (
    //  inputName == "" &&
    //  inputEmail == "" &&
    //  inputPhone == "" &&
    //  inputSubject == "" &&
    //  inputMessage == ""
    //  ) {
    //  alert("Input Form harus diisi"); 
    //  }

    console.log(
        `Name : ${inputName}\n
        Email : ${inputEmail}\n
        Phone : ${inputPhone}\n
        Subject : ${inputSubject}\n
        Message ${inputMessage}`
    );

    const myemail = "arthiodipa123@gmail.com"

    let a = document.createElement("a");
    a.href =`mailto:${myemail}
            ?subject=${inputSubject}
            &body=Hello my name ${inputName}
            , and my number ${inputPhone} 
            ${inputMessage}`;
    a.click();

}