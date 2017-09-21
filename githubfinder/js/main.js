$(document).ready(function() {
    $("#searchUser").on("keyup", function(event) {
        let username = event.target.value;

        $.ajax({
            url: "https://api.github.com/users/"+username,
            data: {
                client_id: "77064e98c3fcfc33a937",
                client_secret: "16774162bc20d997c284185ecfddcf96e05c6ef2"
            }
        }).done(function(user) {
            console.log(user);
        });
    });
});
