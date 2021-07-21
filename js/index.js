let today = new Date();                                     //todays date value stored here
let thisYear = today.getFullYear();                         //this years value plus todays date stored here
let footer = document.querySelector('footer')               //targeting footer in html file and storing value here
const copyright = document.createElement('p');              //creating a paragraph with no values, named copyright
copyright.innerHTML = `Julio Vazquez ${thisYear} &copy`;    //setting copyright value to my name and todays date and year
footer.appendChild(copyright);                              //attaching copyright to footer element in html file






let skills = [ 'Ladder logic', 'SolidWorks'];               //array with my personal skills
let skillsSection = document.getElementById('skills');      //targeting skills ID in html file 
let skillsList = skillsSection.querySelector('ul');         //targeting unordered list in the skills ID in html file

for(let i = 0; i < skills.length; i++){                     //looping through all items in skills array
    let skill = document.createElement('li');               //creating a list item named skill
    skill.innerHTML = skills[i];                            //setting content in skill to my personal skills array info
    skillsList.appendChild(skill);                          //attaching skill content to unordered list in skillsList
};


let messageForm = document.getElementById('leave_message')  //targeting leave_message ID
messageForm.addEventListener('submit', (e) => {             //setting a wait user input of submit form
    e.preventDefault();                                     //optional code to prevent submition of event listener for submit
    let name = e.target.name.value;                         //capturing name from user input 
    let email = e.target.email.value;                       //capturing email from user input
    let message = e.target.message.value;                   //capturing message from user input
    //console.log('${name}, ${email}, ${message}');

    let messageSection = document.getElementById('messages');                               //targeting messages ID in html file
    let messageList = messageSection.querySelector('ul');                                   //targeting unordered list section on messages ID in html file
    let newMessage = document.createElement('li');                                          //creating a new list item element 
    newMessage.innerHTML = `<a href="${email}">${name}</a> wrote: <span>${message}</span>`  //attaching user input from name, email, and message into newly created newMessage list item
    const removeButton = document.createElement('button');                                  //creating a new button element in html file
    removeButton.textContent = "Remove";                                                    //naming new button Remove
    removeButton.type = 'button';                                                           //assigning remove button type to button
    removeButton.addEventListener('click', (Event) => {                                     //adding a user input event on remove button to trigger when clicked
        const entry = Event.target.parentNode;                                              //targeting parent of remove button
        entry.remove();                                                                     //removing parent node from html file
    });
    newMessage.appendChild(removeButton);                                                   //attaching remove button to submited message
    messageList.appendChild(newMessage);                                                    //attaching user submited message to newMessage list element in html file





    messageForm.reset();                                    //clears out form inputed content after its submitted




});

/*
const githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/JCVF/repos");
githubRequest.send();
githubRequest.addEventListener("load", function(event) {
    let repositories = JSON.parse(githubRequest.response);
   // console.log(repositories); 
    let projectSection = document.getElementById('projects');
    let projectList = projectSection.querySelector('ul');    
    for (let i = 0; i < repositories.length; i++) {
        let project = document.createElement('li');
        project.innerHTML = repositories[i].name;
        projectList.appendChild(project);
    }
});
*/


fetch("https://api.github.com/users/JCVF/repos")                    //targetting my repo with fetch command
.then(response => response.json())                                  //converting fetch respond to json data
.then(data => {                                                     //value that will be used
    const repositories = data;                                      //captured data value to be used
    const projectSection = document.getElementById('projects');     //targeting projects ID from html file
    const projectList = projectSection.querySelector('ul');         //targeting projects ID unordered list
        for (let i = 0; i < repositories.length; i++) {             //going through all values in repositories 
            let project = document.createElement('li');             //creating new element list
            project.innerText = repositories[i].name;               //setting content of new element list to repositories value to display in plain text
            projectList.appendChild(project);                       //attaching new list item text content to projectList unordered list
        }
});