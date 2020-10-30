/* *****************************************************
  Variables
***************************************************** */
// Alert Notification Banner
const alertMessage = document.getElementById('notification');
const closeIcon = document.querySelector('.close-icon');
// Projects list UL
const projectList = document.getElementById('projectList');

// Project form elements
const projectNameInput = document.getElementById('projectName');

const projectHTMLCheckbox = document.getElementById('html');
const projectCSSCheckbox = document.getElementById('css');
const projectJSCheckbox = document.getElementById('js');
const projectDetailsInput = document.getElementById('projectDetails');
const addProjectButton = document.getElementById('addProjectButton');

// Student Invite form elements
const studentNameInput = document.getElementById('studentName');
const studentProjectSelect = document.getElementById('projectSelect');
const inviteStudentButton = document.getElementById('inviteStudentButton');

function createNewProject(name = projectNameInput.value) {
  const projectContainer = document.querySelector('.projects');//Grab the projects container where we will append the li
  const projectListItem = document.createElement('LI');//create the li to contain the new project
  projectListItem.classList.add('project');
  const projectHeader = document.createElement('DIV');//create the container for the header
  projectHeader.classList ='project-header flex';
  let projectName = document.createElement('H3');//create the header
  projectName.classList.add('project-name');
  projectName.textContent = name;
  const expandImg = document.createElement('img');//create the plus icon
  expandImg.classList = 'plus-icon pointer';
  expandImg.src = 'icons/plus-icon.svg';
  expandImg.alt = 'Plus Icon Expand Details';
  const innerUL = document.createElement('UL')//create inner UL for the langauges
  innerUL.classList = 'project-langs flex';
  //maybe use an if else stament, or even forEach?
  const htmlLI = document.createElement('li');//create HTML icon
  htmlLI.classList.add('project-lang');
  const htmlLIImg = document.createElement('img');
  htmlLIImg.classList.add('html');
  htmlLIImg.src = 'icons/html5.svg';
  htmlLIImg.alt = 'HTML 5 Logo';
  const cssLI = document.createElement('li');//create css icon
  cssLI.classList.add('project-lang');
  const cssLIImg = document.createElement('img');
  cssLIImg.classList.add('css');
  cssLIImg.src = 'icons/css3.svg';
  cssLIImg.alt = 'CSS3 Logo'
  const jsLI = document.createElement('li');//create js icon
  jsLI.classList.add('project-lang');
  const jsLIImg = document.createElement('img');
  jsLIImg.classList.add('js');
  jsLIImg.src = 'icons/javascript.svg';
  jsLIImg.alt = 'JavaScript Logo';

  const projectDetails = document.createElement('P');//create project details text
  projectDetails.classList = 'project-info hidden';
  projectDetails.textContent = projectDetailsInput.value;

    if (projectHTMLCheckbox.checked) {
      htmlLI.appendChild(htmlLIImg);
      innerUL.appendChild(htmlLI);
    } if (projectCSSCheckbox.checked) {
      cssLI.appendChild(cssLIImg);
      innerUL.appendChild(cssLI);
    } if (projectJSCheckbox.checked) {
      jsLI.appendChild(jsLIImg);
      innerUL.appendChild(jsLI);
    }

  projectHeader.appendChild(projectName);
  projectHeader.appendChild(expandImg);
  projectHeader.appendChild(innerUL);
  projectListItem.appendChild(projectHeader);
  projectListItem.appendChild(projectDetails);
  projectContainer.appendChild(projectListItem);
  projectSelect(name);

  // console.log(projectName.textContent);
  // return(projectName.textContent); //to use in the projectSelect function

}

//To add project to select drop down
//adjust this function to just create option and append to the select
//call this function in the createNewProject()
// need to add a paramete to createNewPrject() to get the name of the project
//call the function in the  createNewProject() with parameter name and call createNewProject() in the eventlistener

function projectSelect(projectName) {

    const projectOption = document.createElement('OPTION');
    projectOption.text = projectName;
    studentProjectSelect.add(projectOption);
  };

// const addProjectToSelect = projectName => {
//   const project = document.createElement('option');
//   project.text = projectName;
//   studentProjectSelect.add(project);
// }




function topFunction() { // when click page goes to top. Taken from W3cschool
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Event Listeners
//when you click this you are taken to top of page to show alert
addProjectButton.addEventListener('click', e => { //works however need to find a way to only append selected languages. If else statements
  e.preventDefault();

  if (projectNameInput.value !== '' && projectDetailsInput.value !== '') {
    alertMessage.classList.remove('hidden');
    alertMessage.classList.add('success');
    alertMessage.firstElementChild.firstElementChild.textContent = 'Your project has been added';
    createNewProject();
  } else if(projectNameInput.value === '' || projectDetailsInput.value === '') {
    alertMessage.classList.remove('hidden');
    alertMessage.classList.add('warning');
    alertMessage.firstElementChild.firstElementChild.textContent = 'Please add a project name and project details';
  }
  projectNameInput.value = '';
  projectDetailsInput.value = '';
  projectHTMLCheckbox.checked = true;
  projectCSSCheckbox.checked = true;
  projectJSCheckbox.checked = false;

  topFunction()

});


projectList.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    const projectInfo = e.target.parentElement.parentElement.lastElementChild;//traversing up from the img(e) to the project info for the specific targetted image
    projectInfo.classList.toggle('hidden');
  }
});


inviteStudentButton.addEventListener('click', e => {
  e.preventDefault();
if(studentNameInput.value !== '') {
  alertMessage.classList.remove('hidden');
  alertMessage.classList.add('success');
  alertMessage.firstElementChild.firstElementChild.textContent = `${studentNameInput.value} had been invited to join the project`;

  //IF WANT TO APPEND THE STUDENT NAME TO PROJECT, BUT WILL NEED TO TIE THIS WITH SELECTING PROJECT. JUST TO SEE IF I CAN
  // const projectContainer = document.querySelector('.projects');
  // const projectStudent = document.createElement('DIV');
  // projectStudent.textContent = studentNameInput.value;
  // projectContainer.appendChild(projectStudent);

} else if (studentNameInput.value === '') {
  alertMessage.classList.remove('hidden');
  alertMessage.classList.add('warning');
  alertMessage.firstElementChild.firstElementChild.textContent = 'Please add a name of a student to invite to the project';
}

studentNameInput.value = '';
topFunction()

});


closeIcon.addEventListener('click', () => {
  alertMessage.classList.add('hidden');
  alertMessage.classList.remove('success');
  alertMessage.classList.remove('warning');
});