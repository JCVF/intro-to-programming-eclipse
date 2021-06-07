let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer')
const copyright = document.createElement('p');
copyright.innerHTML = `Julio Vazquez ${thisYear}`;
footer.appendChild(copyright);






let skills = [ 'Ladder logic', 'SolidWorks'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};
