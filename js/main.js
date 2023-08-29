// Write your code here
document.getElementById('load_by_js').onclick = xhttp;


function xhttp() {
    const xhttpUsers = new XMLHttpRequest();

    xhttpUsers.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            loadUsers(this.responseText);
        }
    }
    showSpinner();
    xhttpUsers.open('GET', 'https://jsonplaceholder.typicode.com/users/');
    xhttpUsers.send();

    function loadUsers(data) {
        let usersXHTTP = JSON.parse(data);
        console.log(usersXHTTP);
        usersXHTTP.forEach(element => {
            console.log(element);
            document.querySelector('.output_by_js').innerHTML += `<p>${element.name}</p>`;
        });
        hideSpinner();
    }

    document.getElementById('load_by_js').disabled = true;
}


document.getElementById('load_by_fetch').onclick = fetchRequest;

function fetchRequest() {
    showSpinner();
    fetch(`https://jsonplaceholder.typicode.com/users/`, { method: 'GET' })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            drowFechOutput(data);
            hideSpinner();
        })
        .catch(function () {
            // catch any errors
            console.log('error')
        });

    document.getElementById('load_by_fetch').disabled = true;
}


function drowFechOutput(data) {
    data.forEach(element => {
        let users = document.createElement('div');
        users.classList.add('users');
        users.innerHTML += `
                    <p class="name${element.id}">${element.name}</p>
                    <button class="edit${element.id} bg_blue" onclick="editName(${element.id})">Edit name</button>
                    <button class="delete${element.id} bg_red" onclick="deleteUser(${element.id})">Delete</button>
                    <div class="save-edit save-edit${element.id} hidden">
                        <input type="text" id="input-id${element.id}">
                        <button id="save${element.id}">Save</button>
                    </div>
                    `;
        document.querySelector('.output_by_fetch').appendChild(users);
    });
}


function deleteUser(userId) {
    showSpinner();
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE'
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            hideSpinner();
            alert(`User with id - ${userId} was deleted`);
        });
}

function editName(userId) {
    document.querySelector(`.save-edit${userId}`).classList.toggle('hidden');
    const btnSave = document.querySelector(`#save${userId}`);

    btnSave.addEventListener('click', () => {
        const input = document.querySelector(`#input-id${userId}`);
        if (input.value !== '') {
            showSpinner();
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    name: `${input.value}`
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data);
                    document.querySelector(`.name${userId}`).innerHTML = data.name;
                    document.querySelector(`.save-edit${userId}`).classList.add('hidden');
                    input.value = '';
                    hideSpinner();
                })
                .catch(function () {
                    // catch any errors
                    console.log('error')
                });
        }


    })
}

const spinner = document.querySelector('.spinner');

function showSpinner() {
    spinner.classList.remove('hidden');
    console.log('show spinner')
}

function hideSpinner() {
    spinner.classList.add('hidden');
    console.log('hide spinner')
}