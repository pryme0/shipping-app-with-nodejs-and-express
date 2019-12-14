/*$(function() {
    $('#use').on('click', function(e) {
        $.get('/tryout', function(data) {
            $('#results').html(data)
        });

    });
}); */
$(function() {
    $('#users').on('click', function(e) {
        let username = document.getElementsByClassName('username')
        let compname = document.getElementsByClassName('compname')
        let useremail = document.getElementsByClassName('useremail')
        let usergoodtype = document.getElementsByClassName('usergoodtype')
        let userphone = document.getElementsByClassName('userphone')




    });
});


let btn = document.getElementById('use').addEventListener('click', () => {
    let con = document.getElementById('users')
    fetch('/tryout')
        .then((resp) => resp.json())
        .then((data) => {
            let output = "<table id='table1' class='table table-bordered table-stripped'><thead><tr><th>Provider</­th><th>URL</th></tr></­thead><tbody>"
            let table1 = document.createElement('table')
            con.append(table1)
            for (let i in data) {
                output +=
                    "<tr><td>" +
                    data[i].firstname + data[i].lastname +
                    "</td> <td > " +
                    data[i].companyname +
                    "</td><td>" +
                    data[i].email +
                    "</td></tr>";
                con.innerHTML = data[i].firstname;
            }
            output += "</tbody></table>";
            con.innerHTML = output;
        })
})
const isItDoneYet = new Promise(
    () => {
        let jo = 129 + 'po'
    }
)
const checkIfItsDone = () => {
    isItDoneYet
        .then((ok) => {
            console.log(ok + " from promise")
        })
        .catch((err) => {
            console.error(err)
        })
}