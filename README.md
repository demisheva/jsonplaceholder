# jsonplaceholder

<p>Git Hub Pagges <a href="https://demisheva.github.io/jsonplaceholder/">demisheva.github.io/jsonplaceholder/</a></p>

<h1>TASK</h1>

<p>Use this API (https://jsonplaceholder.typicode.com/) for your calls.</p>
<ol>
    <li>Display two buttons (“Load by JS” and “Load by Fetch”) and two empty containers. 
        <ol>
            <li>Left container:
                <ul>
                    <li>when user clicks on “Load by JS” button the list of users are loaded by XMLHttpRequest (GET /users);</li>
                    <li>the items in the list are readonly (just list of items); </li>
                </ul>
            </li>
            <li>Right container:
                <ul>
                    <li>when user click on “Load by Fetch” button the list of users are loaded by Fetch (GET /users);</li>
                    <li>the items have possibility to edit name and delete item;</li>
                    <li>when editining is finished update user on the server(call PUT method) PUT/user/${id} and update name from response.</li>
                    <li> add possibility to delete user DELETE /user/${id}. If request is finished show alert with message – “User with id – {id} was deleted”. Items can’t be deleted as jsonplaceholder doesn’t allow to change database. We just need to show loader during the request and show alert.</li>
                </ul>
            </li>
        </ol>
    </li>
    <li>Show spinner on every request call (can be just word – “...Loading”)</li>
    <li>jsonplaceholder doesn’t allow to change database, so using PUT and DELETE can be</li>
    <li>You can modify index.html if you need it.</li>
    <li>Styles can be not as on the screens;</li>
</ol>
<h2>RESTRICTIONS</h2>
<ul>
    <li>Using any external libraries are forbidden.</li>
    <li>Adding task/ folder is forbidden. Do not push it to repository. (Only homework/ folder should be pushed)</li>
    <li>Editing server folder is forbidden.</li>
</ul>
<p>Design in folder design</p>
