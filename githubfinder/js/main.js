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
            $("#profile").html(`
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">${user.name}</h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img class="thumbnail avatar" src="${user.avatar_url}">
                                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View profile</a>
                            </div>
                        </div>
                    </div>
                </div>`
            );
        });
    });
});
