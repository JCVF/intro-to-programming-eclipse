let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer')
const copyright = document.createElement('p');
copyright.innerHTML = `Julio Vazquez ${thisYear} &copy`;
footer.appendChild(copyright);






let skills = [ 'Ladder logic', 'SolidWorks'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};


let messageForm = document.getElementById('leave_message')
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;
    console.log('${name}, ${email}, ${message}');

    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="${email}">${name}</a> wrote: <span>${message}</span>`
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.type = 'button';
    removeButton.addEventListener('click', (Event) => {
        const entry = Event.target.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);





    messageForm.reset();




});

let githubRequest = new XMLHttpRequest();
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