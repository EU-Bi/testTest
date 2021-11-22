const testParagraph = document.getElementById('test-id');
   function hideElement(){
    if(confirm('Are you sure want to hide element?'))
    testParagraph.style.display='none';
}
function showElement(){
        testParagraph.style.display='block';
}

const myButton = document.getElementById('button');

myButton.addEventListener('click', hideElement);


const myBtn = document.getElementById('btn');
myBtn.addEventListener('click', showElement);