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

function createNewProject() {
  const projectContainer = document.querySelector('.projects');//Grab the projects container where we will append the li
  const projectListItem = document.createElement('LI');//create the li to contain the new project
  projectListItem.classList.add('project');
  const projectHeader = document.createElement('DIV');//create the container for the header
  projectHeader.classList ='project-header flex';
  const projectName = document.createElement('H3');//create the header
  projectName.classList.add('project-name');
  projectName.textContent = projectNameInput.value;
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


}

//To add project to select drop down
let projectName = projectNameInput.value;
function projectSelect() {
  const projectOption = document.createElement('OPTION');
  projectOption.text = projectName;
  studentProjectSelect.add(projectOption); //returning undefined at the moment



  // studentProjectSelect.innerHTML += `<option>${projectNameInput.value}</option>`;

  // const projectSelectName = document.createTextNode('projectNameInput.value');
  // projectOption.appendChild(projectSelectName);
  // studentProjectSelect.appendChild(projectOption);
}

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
    // alertMessage.style.backgroundColor = '#5fcf80';
    createNewProject();
  } else if(projectNameInput.value === '' || projectDetailsInput.value === '') {
    alertMessage.classList.remove('hidden');
    alertMessage.classList.add('warning');
    alertMessage.firstElementChild.firstElementChild.textContent = 'Please add a project name and project details';
    // alertMessage.style.backgroundColor = '#cf5f5f';
  }
  projectNameInput.value = '';
  projectDetailsInput.value = '';
  projectHTMLCheckbox.checked = true;
  projectCSSCheckbox.checked = true;
  projectJSCheckbox.checked = false;

  projectSelect()

  topFunction()

});

// this works for the dummy project but not for new projects...why??
projectList.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    const projectInfo = e.target.parentElement.parentElement.lastElementChild;//traversing up from the img(e) to the project info for the specific targetted image
    projectInfo.classList.toggle('hidden');
  }
});


inviteStudentButton.addEventListener('click', e => {});
  closeIcon.addEventListener('click', () => {
  alertMessage.classList.add('hidden');
  alertMessage.classList.remove('success');
  alertMessage.classList.remove('warning');
});