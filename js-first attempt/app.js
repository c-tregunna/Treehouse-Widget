/* *****************************************************
  Variables
***************************************************** */
// Alert Notification Banner
const alert = document.getElementById('notification');
const closeIcon = document.querySelector('.close-icon');
// Projects list UL

// Project form elements - contents of which I need to append to above
const projectNameInput = document.getElementById('projectName');
const projectHTMLCheckbox = document.getElementById('html');
const projectCSSCheckbox = document.getElementById('css');
const projectJSCheckbox = document.getElementById('js');
const addProjectButton = document.getElementById('addProjectButton');
const projectDetailsInput = document.getElementById('projectDetails');

function createNewListItem(name, details) {
    //declarations
    const projectUL = document.querySelector('.projects');
    //create li
    const mainli = document.createElement('li');
    mainli.classList.add('project');
    //create header div
    const projectDiv = document.createElement('div');
    projectDiv.classList = 'project-header flex';
    //creat h3
    const header_3 = document.createElement('h3');
    header_3.classList.add('project-name');
    header_3.textContent = name;
    // create image
    const img = document.createElement('img');
    img.classList = 'plus-icon pointer';
    img.src = 'icons/plus-icon.svg';
    img.alt = 'Plus Icon Expand Details';
    // create ul and li children
    const ul = document.createElement('ul');
    ul.classList = 'project-langs flex';
    // create HTML icon
    const li_1 = document.createElement('li');
    li_1.classList.add('project-lang');
    const li_image_1 = document.createElement('img');
    li_image_1.classList.add('html');
    li_image_1.src = 'icons/html5.svg';
    li_image_1.alt = 'HTML 5 Logo';
    // create css icon
    const li_2 = document.createElement('li');
    li_2.classList.add('project-lang');
    const li_image_2 = document.createElement('img');
    li_image_2.classList.add('css');
    li_image_2.src = 'icons/css3.svg';
    li_image_2.alt = 'CSS3 Logo'
    // create js icon
    const li_3 = document.createElement('li');
    li_3.classList.add('project-lang');
    const li_image_3 = document.createElement('img');
    li_image_3.classList.add('js');
    li_image_3.src = 'icons/javascript.svg';
    li_image_3.alt = 'JavaScript Logo';
    // create project details
    const text = document.createElement('p');
    text.classList = 'project-info hidden';
    text.textContent = details;
    //appending elements
    //append li images to li
    li_1.appendChild(li_image_1);
    li_2.appendChild(li_image_2);
    li_3.appendChild(li_image_3);
    //appending li's to UL
    ul.appendChild(li_1);
    ul.appendChild(li_2);
    ul.appendChild(li_3);
    //appending children of projectDiv to projectDiv
    projectDiv.appendChild(header_3);
    projectDiv.appendChild(img);
    projectDiv.appendChild(ul);
    mainli.appendChild(projectDiv);
    projectUL.appendChild(mainli);
    projectUL.appendChild(text);
}

// function createNewListItem(name, details) { short way but not best practice
//   //const projectUL = document.querySelector('.projects');
//   const projectList = document.getElementById('projectList'); // this is where i need to append the content of the create project form
//   if(projectHTMLCheckbox.checked === false) {
//     document.querySelector('.html').classList.add('hidden');
//   };

//   let newHTML = `
//   <li class="project">
//     <div class="project-header flex">
//       <h3 class="project-name">${name}</h3>
//       <img class="plus-icon pointer" src="icons/plus-icon.svg" alt="Plus Icon Expand Details">
//       <ul class="project-langs flex">
//         <li class="project-lang"><img class="html" src="icons/html5.svg" alt="HTML5 Logo"></li>
//         <li class="project-lang"><img class="css" src="icons/css3.svg" alt="CSS3 Logo"></li>
//         <li class="project-lang"><img class="js" src="icons/javascript.svg" alt="JavaScript Logo"></li>
//       </ul>
//     </div>
//     <p class="project-info hidden">${details}</p>
//   </li>
//   `
//   projectList.innerHTML += newHTML;
// }

addProjectButton.addEventListener('click', (e) => {
  e.preventDefault();
  let name = document.querySelector('#projectName').value;
  let details = document.querySelector('#projectDetails').value;

  createNewListItem(name, details);
});

// addProjectButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   const projectNameInput = document.getElementById('projectName');
//   //let name = document.querySelector('#projectName').value;
//   const projectDetailsInput = document.getElementById('projectDetails');
//  //let details = document.querySelector('#projectDetails').value;
//   createNewListItem(name, details);
// });

// Student Invite form elements
const studentNameInput = document.getElementById('studentName');
const studentProjectSelect = document.getElementById('projectSelect');
const inviteStudentButton = document.getElementById('inviteStudentButton');

//1. Create a function that will take the data from the "Create a Project" form and append to the DOM using the project list `ul` widget.




// Event Listeners



projectList.addEventListener('click', e => {});

inviteStudentButton.addEventListener('click', e => {});

closeIcon.addEventListener('click', () => {});

//element.textContent = 'content';

/* from net, this works but needs altering to get the value of the input
// create new option element
var opt = document.createElement('option');

// create text node to add to option element (opt)
opt.appendChild( document.createTextNode('New Option Text') );

// set value property of opt
opt.value = 'option value';

// add opt to end of select box (sel)
sel.appendChild(opt);

My piss poor attempt
let projectOption = document.createTextNode(projectNameInput.value);
  var option = document.createElement('option');
  option.appendChild(projectOption);
  option.value = '';
  studentProjectSelect.appendChild(option);
  */


  //function projectName () {
  // let selectOption = document.createTextNode(projectNameInput.value);
  // var option = document.createElement('option');
  // option.appendChild(selectOption);
  // studentProjectSelect.appendChild(option);
  // return projectName;
  // console.log(selectOption);
//}



//   // console.log(projectName);//returning the first project only
//   const projectOption = document.createElement('OPTION');

//   projectOption.text = name;//only showing the first dummy project only
//   studentProjectSelect.add(projectOption);
// }
//   )
// }

  // const addProjectToSelect = projectName => {
  //   const project = document.createElement('option');
  //   project.text = projectName;
  //   studentProjectSelect.add(project);
  // }



  // studentProjectSelect.innerHTML += `<option>${projectNameInput.value}</option>`;

  // const projectSelectName = document.createTextNode('projectNameInput.value');
  // projectOption.appendChild(projectSelectName);
  // studentProjectSelect.appendChild(projectOption);