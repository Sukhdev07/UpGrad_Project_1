
// Get the modal
var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
var btn1 = document.getElementById("signIn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it

var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn2 = document.getElementById("signUp");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
    else if (event.target == modal1) {
    modal1.style.display = "none";
    }
}

function callSign(){
    modal1.style.display = "none";
    modal2.style.display = "block";
    
}
var edit=1;
function editPost(){
    var x=document.getElementsByClassName('blogText')[0];
    var x1=document.getElementById('blogTitle');
    if(edit==1)
        {
            var but=document.getElementById('editButton');
            but.innerHTML='Save&nbsp;<i class="fa fa-floppy-o" aria-hidden="true"></i>';
            edit=0;
            var txt=document.createElement('textarea');
            var txt1=document.createElement('textarea');
            var node=document.getElementById('blogBody').innerHTML;
            var node1=document.getElementById('blogTitleNew').innerHTML;
            document.getElementById('blogBody').style.display='none';
            document.getElementById('blogTitleNew').style.display='none';
            console.log(node);
            var any=document.createTextNode(node.trim());
            var any1=document.createTextNode(node1.trim());
            txt.appendChild(any);
            txt1.appendChild(any1);
            txt.style.resize='none';
            txt1.style.resize='none';
            txt.style.width='100%';
            txt1.style.width='30%';
            txt1.style.fontSize='20px';
            txt1.style.textAlign='center';
            x.appendChild(txt);
             x1.appendChild(txt1);
            txt.style.height=(txt.scrollHeight)+"px";
            txt1.style.height=(txt1.scrollHeight)+"px";
        }
    else
    {
        var but=document.getElementById('editButton');
         but.innerHTML='Edit &nbsp;<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
        edit=1;
        var node=document.getElementById('blogBody');
        var node1=document.getElementById('blogTitleNew');
         var txt1=document.getElementsByTagName('textarea')[0].value;
        var txt=document.getElementsByTagName('textarea')[1].value;
        node.innerHTML=txt;
         node1.innerHTML=txt1;
        node.style.display='block';
        node1.style.display='block';
        console.log(txt);
          x.removeChild(x.lastChild);
        x1.removeChild(x1.lastChild);
    }
}

var likeCount = 0;
function postLiked() {
    likeCount++;
    document.getElementById("likeBlog").innerHTML = '<i class="fa fa-thumbs-up"></i> Liked!';
    if(likeCount == 1)
        document.getElementById("commentCount").innerHTML = likeCount + " person likes this!";
    else
        document.getElementById("commentCount").innerHTML = likeCount + " people have liked this!";
}

function addComments(id){
       var par=document.createElement('div');
        var val=document.createTextNode(id.value);
       
        par.appendChild(val);
    var mainDiv=document.getElementById('addEventNames');
    mainDiv.prepend(par);
    mainDiv.style.padding='10px 20px 20px 20px';
     par.classList.add('comment');
    }