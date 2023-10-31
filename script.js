function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "New:" + document.getElementById('name').value
    + "<br> Email:" + document.getElementById('email').value
    + "<br> Pone no :" + document.getElementById('phone').value
    + "<br> Meassage:" + document.getElementById('message').value
}).then(
  message => alert("Message Sage Sent Succesfully")
);
}