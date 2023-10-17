const mybutton = document.getElementById("myBtn");
const mybutton1 = document.getElementById("myBtn1");


const mytext = document.getElementById("text");
const mytext1 = document.getElementById("text1");


const readless = document.getElementById("readless");
const readless1 = document.getElementById("readless1");

mybutton.addEventListener("click", (e) =>{
mytext.classList.toggle("showMore");
if (mybutton.innerText ==="Read More") {
mybutton.innerText = "Read less";
readless.style.display = "block"
}else{
	mybutton.innerText = "Read More"
	readless.style.display = "none"
}
	})


mybutton1.addEventListener("click", (e) =>{
mytext1.classList.toggle("showMore");
if (mybutton1.innerText ==="Read More") {
mybutton1.innerText = "Read less";
readless1.style.display = "block"
}else{
	mybutton1.innerText = "Read More"
	readless1.style.display = "none"
}
	})



//function myBtn() {
	//if (mybutton1.innerText ==="Read More") {
//mybutton1.innerText = "Read less";
//readless1.style.display = "block"
//}else{
	//mybutton1.innerText = "Read More"
	//readless1.style.display = "none"
	
//}





// const dots = document.getElementById('dots');
 //let moreText = document.getElementById('more');
 //const mybutton = document.getElementById('myBtn');
//BtnText.addEventListener("click",(e) =>{
	//moretext.classList.toggle("show More");
	//if (BtnText.innerText === "Read More") {
	  //  BtnText.innerText = "Read Less";
	//}else{
		//BtnText.innerText = "Read More";
	//}
//}
	//)
//}