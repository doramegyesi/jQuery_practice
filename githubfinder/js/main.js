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
            $.ajax({
                url: "https://api.github.com/users/"+username+"/repos",
                data: {
                    client_id: "77064e98c3fcfc33a937",
                    client_secret: "16774162bc20d997c284185ecfddcf96e05c6ef2",
                    sort: "created: asc",
                    per_page: 5
                }
            }).done(function(repos) {
                $.each(repos, function(index, repo) {
                    $("#repos").append(`
                        <div class="well">
                            <div class="row">
                                <div class="col-md-7">
                                    <strong>${repo.name}</strong>: ${repo.description}
                                </div>
                                <div class="col-md-7">
                                    <span class="label label-default">Forks: ${repo.forks_count}</span>
                                    <span class="label label-primary">Watchers: ${repo.watchers_count}</span>
                                    <span class="label label-success">Stars: ${repo.stargazers_count}</span>
                                </div>
                                <div class="col-md-7">
                                    <a href="${repo.html_url}" target="_blank" class="btn btn-default">Let's see the repo!</a>
                                </div>
                            </div>
                        </div>
                    `);
                });
            });
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
                            <div class="col-md-9">
                                <span class="label label-default">Public repos: ${user.public_repos}</span>
                                <span class="label label-primary">Public gists: ${user.public_gists}</span>
                                <span class="label label-success">Follower: ${user.followers}</span>
                                <span class="label label-info">Following: ${user.following}</span>
                                <br><br>
                                <ul class="list-group">
                                    <li class="list-group-item">Company: ${user.company}</li>
                                    <li class="list-group-item">Website/blog: ${user.blog}</li>
                                    <li class="list-group-item">Location: ${user.location}</li>
                                    <li class="list-group-item">Member since: ${user.created_at}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="page-header">Latest repos</h3>
                <div id="repos"></div>
            `);
        });
    });
});
