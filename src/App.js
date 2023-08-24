import 'nijor';
import 'nijor/router'; // Importing the Nijor Router
import "nijor/theme"; // Importing this file for managing dark mode
import App from 'App.nijor'; // Importing the App.nijor page

//@Routes()

window.notesDB = new Map(); // We will be using this Map as our DB in this project.
window.notesDB.set('n35209',{title:"What is this App about ?",content:"This is a simple Note-Making App built with Nijor. This App uses a JS Map object to store data and the use generated data gets lost when the page reloads. This app was built with the intention to teach people, the various features of Nijor."});
window.notesDB.set('n46203',{title:"Dummy Note",content:"Just some dummy content ....."});

App.init('app');
App.run();
let url = window.location.pathname;
window.nijor.renderRoute(url);