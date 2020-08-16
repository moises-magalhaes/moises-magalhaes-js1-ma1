//--Question 1--//
const cat = {
	complain: function () {
		console.log("meow!");
	},
};

//--Question 2--//
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//--Question 3--//
heading.style.fontSize = "2em";

//--Question 4--//
const classes = heading.classList;
classes.add("subHeading");

//--Question 5--//
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((paragraphs) => {
	paragraphs.style.color = "red";
});

//--Question 6--//
const resultsContainer = ".results";
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//--Question 7--//
function listFunction(list) {
		
		listFunction(cats);
			console.log(list);
};

const cats = [
	{
		name: "Blob",
		age: 10,
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21,
	}
],

//--Question 8--//
function createCats(cats) {
createCats(cats);
//const catContainer = document.querySelector(".cat-container");
let catsAge = "Unknown";
if (cats.age !== undefined){
//catsAge = cats.age;
}

const catContainer = document.querySelector(".cat-container");
const name = document.querySelector(".name-class");
const age = document.querySelector(".p-class");

name.innerHTML = cats.name;
age.innerHTML = catsAge;
catContainer.innerHTML = `
<h5>Name ${cats.name}</h5>
<p>Age: ${catsAge}</p>`

for (let i = 0; i < cats.length; i++){
	console.log(cats[i]);
}

console.log(catContainer);

return createCats;


};

cats ();

const returnValue = createCats();

console.log(returnvalue);