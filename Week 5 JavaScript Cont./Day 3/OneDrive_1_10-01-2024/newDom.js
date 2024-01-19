// gathering paragraphs
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let heading = document.getElementById('heading');

// creating the event and event listener
//                  (event type, function)
p1.addEventListener('mouseover', function run(){
    p1.style.backgroundColor = "orange"

} );

p1.addEventListener('mouseleave', function run(){
    p1.style.backgroundColor = "white"

} );

//create event that changes the second paragraph when clicked
p2.addEventListener('click', function run(){
    p2.style.backgroundColor = "blue"

} );

//create event that revert the second paragraph on mouseout
p2.addEventListener('mouseout', function run(){
    p2.style.backgroundColor = "white"

} );


//p5

function changeOrange(){
    p5.style.color = "orange"
};

// heading

function enlargeText(){
    if (heading.style.fontSize != "50px"){
    heading.style.fontSize = "50px"
    }
else {
    heading.style.fontSize = ""
}
}