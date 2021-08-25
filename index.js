 // set ul list end of website
/* 
const newCourses = document.createElement('h2')
  newCourses.innerText = 'New Courses'
  newCourses.style.color = 'steelblue'
  document.getElementById('list').appendChild(newCourses) */
  // ul list dynamically add by javascript 
  /* let courses = ['Web development', 'Programming', 'Graphic design'];
   const ul =  document.createElement('ul');
  for ( let i=0; i<courses.length; i++ ){
    const li = document.createElement('li');
    li.innerText= courses[i];
    ul.appendChild(li);
}
document.getElementById('list').appendChild(ul); */
 
 document.getElementById('top-players').style.color = 'steelblue';
 document.getElementById('top-blogs').style.color = 'steelblue';
 document.getElementById('latest-courses').style.color = 'steelblue';
 // top player background color

const topPlayer= document.getElementsByClassName('player'); 
for(player of topPlayer){
    player.style.backgroundColor='rgba(231, 238, 139, 0.871)'; 
}
// add ul list

 
var i = 0;
document.getElementById('item').addEventListener("click", function ()
{
    function language(index, arr)
    {

        if (index < arr.length) {
            i++;
            const create = document.createElement('li');
            create.innerText = arr[index];
            const parent = document.getElementById('add-items');
            parent.appendChild(create);
        } else {
            document.getElementById('add-items').setAttribute('disabled', true);
            document.getElementById('add-items').style.cursor = "not-allowed";
        }
    }
    const courses = ['SEO', 'Python', 'Node js' ,'MySQL' , 'Game development'];
    language(i, courses);
    // Just Hello add with li list //
    /* const create = document.createElement('li');
    create.innerText = "Hello";
    const parent = document.getElementById('add-items');
    parent.appendChild(create); */
})
       
    
// added input feild and button
document.getElementById('course-number').addEventListener('click', function(event){
    const numberInput = document.getElementById('input-field');
    const numbers = numberInput.value;
    
    if (numbers==8){
        event.target.setAttribute('disabled', true)
        event.target.innerText = 'x'
    }
    else{
        numberInput.value = Number(numberInput.value) + 1;
    }
});








// for( let course of courses){
    //     var li = document.createElement('li');
    //      li.appendChild(document.createTextNode(course))
    //     // console.log(course)
    //     }
        
    //         var ul = document.getElementById('add-items');
    //         ul.appendChild(li); 

    












