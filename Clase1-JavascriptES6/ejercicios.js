
/*************************** EJERCICIO 1 *********************************/
/*---> Listar datos de un objeto en una funcion publica usando let */

//function User (username, name, surname, post) {
//const User = objUser => {

function User (objUser) {	
	let username = objUser.username;
	//console.log(this.username);
	let name = objUser.name;
	let surname = objUser.surname;
	let posts = objUser.posts ;

	//console.log(objUser.posts);

	//funcion pública
	this.getpost = () => {
		console.log('Ej 1 - Datos de un objeto en una funcion publica');
    console.log(posts);
	}

}

//funciona si las variables no estan con let
//por cada tipo de objeto hay un prototipo
User.prototype.getPosts = function(){
	return this.posts;
}


//let newUser = new User('gcalcgno', 'Giannina', 'g', ['curso', 'coderhouse']);
let objUser = {
	username : 'gcalcgno', 
	name : 'Giannina', 
	surname : 'g', 
	posts : ['curso', 'coderhouse']
};

let newUser = new User (objUser);

newUser.getpost();

/**************************************************************************/






/*************************** EJERCICIO 2 *********************************/
/*---> Listar últimos 5 posts */

const posts = [
  {
    userId: "58c2b1633a75ca651ef1cc9d",
    title: "cupidatat mollit Lorem ex est",
    summary: "duis sint dolor in reprehenderit nostrud veniam consequat est",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163be1c3b62aae46134",
    title: "tempor aute nulla laboris nostrud",
    summary: "anim veniam et occaecat duis sunt cillum sunt id",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b1637c03205de3e8cf46",
    title: "dolore consectetur in do eu",
    summary: "sit aliquip eu id excepteur dolor nulla sunt elit",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163088464d1826ffb0e",
    title: "non ad et amet aliqua",
    summary: "fugiat tempor consectetur ea proident proident tempor Lorem dolor",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b16369a10d974596d6ed",
    title: "incididunt laborum ullamco officia cillum",
    summary: "fugiat elit non minim esse aute id eu est",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163e135daa9b23107a1",
    title: "in incididunt dolor sint voluptate",
    summary: "voluptate id adipisicing quis magna cillum exercitation officia laboris",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b16395cf8efe96c03c8e",
    title: "aliqua occaecat aute aute enim",
    summary: "et eiusmod dolor dolor consequat nulla irure pariatur anim",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163048474e666f5d875",
    title: "ad minim ex sunt ea",
    summary: "exercitation tempor nostrud commodo ullamco do laboris dolor adipisicing",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b1639d9730b1cfa44591",
    title: "eu dolor proident anim voluptate",
    summary: "ex deserunt ipsum cillum qui voluptate Lorem ea nostrud",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b1636fdc9ee9f0fe3765",
    title: "adipisicing ea consectetur adipisicing anim",
    summary: "exercitation reprehenderit et mollit aliquip tempor anim ipsum irure",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163e3330c222f00bfb4",
    title: "velit cupidatat excepteur amet aliqua",
    summary: "quis commodo Lorem in cupidatat commodo culpa et in",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b1635ffb495016775b12",
    title: "fugiat et ut veniam Lorem",
    summary: "sit sint Lorem nulla aliqua reprehenderit sunt ullamco excepteur",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163f02975edc6d03526",
    title: "amet fugiat reprehenderit sit et",
    summary: "qui incididunt laborum eu est sint voluptate voluptate cillum",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163f02975edc6d03526",
    title: "irure Lorem do aliqua qui",
    summary: "labore irure exercitation do commodo voluptate sint exercitation deserunt",
    link: "http://placehold.it/32x32"
  },
  {
    userId: "58c2b163f02975edc6d03526",
    title: "culpa culpa consequat incididunt aliquip",
    summary: "cupidatat in dolor ut labore et officia pariatur exercitation",
    link: "http://example.com"
  }
];


function createLatest(cuanto){ // cuanto = 5
	return function(posts){
		let list = [];
		if (cuanto <= posts.length) {
			
			//for (let i = 0 ; i < cuanto; i++) {
			//	list.push(posts[i]);
			//};
			//return list ;
			//return posts.slice(0, cuanto);
			return posts.slice(posts.length - cuanto, posts.length).reverse();
		}else{
			return 'El valor es mayor a la cantidad de posts';
		};
	}
}
const getLastesFive = createLatest(5);
console.log('Ej 2 - Listar últimos 5 post');
console.log(getLastesFive(posts));

/**************************************************************************/






/*************************** EJERCICIO 3 *********************************/
/*---> Obtener sum de longitud de los titles */

var sum = posts.reduce (function( acc, val){
	titulos = val.title.length;
	//console.log(acc);
	return acc + titulos;//val elemento actual que esta recorriendo

}, 0);// 0 es el valor inicial
console.log('Ej 3 - Obtener sum de longitud de los titles');
console.log(sum);

/**************************************************************************/






/*************************** EJERCICIO 4 *********************************/
/*---> Devolver el listado, cambiar el title por "la maquinita" */

var cambaiarTitulo = posts.map (function(acc, val){ //acc acumulador
	//modificando el original
	//val.title = 'La Maquinita';
	//return acc;
	//opcion retornando un objeto nuevo
	return Object.assign({}, posts, {title:'La Maquinita'});
}, posts);

//otra forma mas corta
//posts.map(post => Object.assign({}, posts, {title:'La Maquinita'} ));
console.log('Ej 4 - Devolver el listado, cambiar el title por "la maquinita"');
console.log(cambaiarTitulo);

/**************************************************************************/






/*************************** EJERCICIO 5 *********************************/
/*---> agrupar los post por usuarios */

var agruparPosts = posts.reduce (function(acc, val){
	//si el acumulador esta vacío
	if(!acc[val.userId]){
    //creo un array y asigno el primer post al array
		acc[val.userId] = [val];
	}else{
    //asigna el post al usuario 
		acc[val.userId].push(val);
	}
	
	return acc;

}, {} );// 0 es el valor inicial
console.log('Ej 5 - Agrupar los post por usuarios');
console.log(agruparPosts);

/**************************************************************************/






/*************************** EJERCICIO 6 *********************************/
/*---> Ej 1 usando clases y Symbol */

const nameSym = Symbol('nombre');
const postsSym = Symbol('posts');

console.log('Ej 6 - Ej 1 usando clases y Symbol');

class UserClass {	
	//funcion pública
	//this[nameSym]
  
	constructor(){
		this[nameSym] = 'giannina'; 
		console.log(this[nameSym]);
	}

	getpost() {
		this[postsSym] = objUser.posts; 
		console.log(this[postsSym]);
	}
}

let newUserClass = new UserClass (objUser);
newUserClass.getpost();

/**************************************************************************/






/*************************** EJERCICIO 7 *********************************/
/*---> Promesas */

function request(url) {

    return p1 = new Promise( function(resolver, rechazar) { 

    /*let req = new XMLHttpRequest();
      req.onreadystatechange = () => {
        if(req.readyState == 4){
          if(req.status === 200){
            cb(req.response, null);//resuelve
          }
          else{
            cb(null, new Error(req.statusText));//error
          }
        }
      };
      req.onerror = () => cb(new Error(req.statusText));//error
      */
    fetch(url);
     // req.open('GET', url);
     // req.send();
      
  } );


  p1
    .then(
      function(response){
        response.json();
      }
    )
    .then((resolver) => console.log(resolver))
    .catch(console.log('errorMessage'));
 
}

request('https://jsonplaceholder.typicode.com/posts');



/*fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((result) => console.log(result))
.catch(console.log('errorMessage'));*/

/*let MyPromise = new Promise( function(resolver, rechazar) { 


} );

Mypromise
  .then(function(){})
  .catch(function(){})



function request(url, cb) {
  let req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if(req.readyState == 4){
      if(req.status === 200){
        cb(req.response, null);
      }
      else{
        cb(null, new Error(req.statusText));
      }
    }
  };
  req.onerror = () => cb(new Error(req.statusText));
  req.open('GET', url);
  req.send();
}
*/
/**************************************************************************/