const raining= true;
const cold= true;

if (raining){
	console.log("Don't forget your umberlla!");
}

if (cold){
	console.log("Make sure you pick out a scarf!");
}
else{

	console.log("Short sleeves are fine.");

}


const temperature = 12;


if (temperature<0) {
	console.log("Make sure you pic out a scarf!");
}

else if (temperature <15){
	console.log("Short sleeves won't cut it!");
}else
{ 
	console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");

if(temperature < -40 || temperature >40){
	console.log("Maybe going outside isn't suc a gerat idea");
}

if(!raining){
	console.log("Leave your umberlla at home!");
}

