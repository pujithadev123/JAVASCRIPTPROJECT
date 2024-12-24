const typewriter=document.getElementById("typewriter")
const text=typewriter.textContent;
typewriter.textContent=" "
let index=0

function typeEffect(){
    if(index<text.length){
        typewriter.textContent+=text.charAt(index)
        index++
        setTimeout(typeEffect,45)
    }else{
        typewriter.style.borderRight="none"
    }
}
window.onload=typeEffect


const url1 = 'https://jokes-always.p.rapidapi.com/office';
const options1 = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2b5e175d65mshabe227715b477d5p13b7d4jsn7ecb080e453b',
		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
	}
};

let jokeBtn=document.getElementById("jokebtn")
let jokebtnplay=document.getElementById("jokebtnplay")
jokeBtn.addEventListener("click",async (e)=>{
    e.preventDefault()
    jokeBtn.currentTime=0
    jokebtnplay.play()
    const data= await fetch(url1,options1).then(res=>res.json()).then(res=>res).catch(err=>err)
    console.log(data)
    displayjokes(data)
    
    })

    function displayjokes(z){
        let gettingjoke=document.getElementById("joke")
         gettingjoke.textContent="" 
        gettingjoke.innerHTML=`<p>${z.data}</p>`
        console.log(gettingjoke)
   }



   
const url2 = 'https://famous-quotes4.p.rapidapi.com/random';
const options2= {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2b5e175d65mshabe227715b477d5p13b7d4jsn7ecb080e453b',
		'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
	}
};
let quoteBtn=document.getElementById("quotesbtn")
let quotebtnplay=document.getElementById("quotebtnplay")
   quoteBtn.addEventListener("click",async (e)=>{
    e.preventDefault()
    quoteBtn.currentTime=0
    quotebtnplay.play()
    const data= await fetch(url2,options2).then(res=>res.json()).then(res=>res).catch(err=>err)
    console.log(data)
    displayquotes(data)
    
    })
    function displayquotes(z){
        let gettingquote=document.getElementById("quote")
         gettingquote.textContent=""
        z.forEach(x => { 
        gettingquote.innerHTML=`<p>${x.text}</p>`
        console.log(gettingquote)
     })
    }




 

   
  
