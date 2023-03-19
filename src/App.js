import 'nijor';
import Router from 'nijor/router'; // Importing the Nijor Router
import App from 'App.nijor'; // Importing the App.nijor page
import Home from 'pages/index.nijor'; // Importing the home.nijor page
import newNote from 'pages/new.nijor'; // Importing the about.nijor page
import Note from 'pages/note.nijor'; // Importing the about.nijor page
import Error404 from 'pages/404.nijor'; // Importing the 404error.nijor page


/* Initializing the Router. The '#n-route' is the reference to the div
where the content from the pages (Home.nijor and About.nijor) has to be rendered. */

window.notesDB = new Map(); // We will be using this Map as our DB in this project.
window.notesDB.set('n35209',{title:"What is this App about ?",content:"This is a simple Note-Making App built with Nijor. This App uses a JS Map object to store data and the use generated data gets lost when the page reloads. This app was built with the intention to teach people, the various features of Nijor."});
window.notesDB.set('n46203',{title:"Dummy Note",content:"Just some dummy content ....."});

const router = new Router('#n-routes');
router.postRender(()=>window.nijor.emitEvent('routechange')); // function passed to the postRender function runs after every page is rendered on route change. Similarly, the function passed to the preRender function runs before every page is rendered on route change.
router.route('/',Home); // Defining the Routes.
router.route('/new',newNote); // Defining the Routes.
router.route('/note/<id>',Note); // Defining the Parameterized Route.
router.route('*',Error404); // '*' route is rendered in case of undefined routes ; can be used for showing a 404 Error page.
router.render(App); // Rendering the App.nijor file.