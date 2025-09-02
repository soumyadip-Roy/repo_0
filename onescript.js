function abc(){
    const p = prompt ("Tell me your name fas fas fas >>> ");
    console.log(p);
    document.querySelector("p").innerText="Welcome "+ p;
    document.querySelector("h1").style.color="red";
    document.getElementById("123").style.color="blue";
    // document.querySelector("h1").textContent="Welcome"+ p; means the smae thing in this context but text content is used with p, and the other one is used for headers and footers
}