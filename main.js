var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'
input.addEventListener('keyup', event=>{
    if (event.keyCode === 13 && event.target.value !== ''){
        addevent(document.getElementById("cal-button"));
    }
})
function addevent(event){
    const tr = event.parentNode.parentNode.getElementsByTagName("DIV")[1].getElementsByTagName("TABLE")[0].getElementsByTagName("TR");
    for (let i=0;i<tr.length;i++){
        // console.log(tr[i].getElementsByTagName("TD").length);
        for (let j=0;j < tr[i].getElementsByTagName("TD").length;j++){
            // console.log(tr[i].getElementsByTagName("TD")[j]);
            if (tr[i].getElementsByTagName("TD")[j].style["background-color"] == "rgb(0, 0, 0)" && input.value!=""){
                const date = tr[i].getElementsByTagName("TD")[j].innerHTML;
                tr[i].getElementsByTagName("TD")[j].innerHTML = date + "<br />" +input.value;
                document.getElementById('cal-input').value = "";
            }
        }
    }
}
function test(event){
    // console.log(event.id);
    const parent = event.parentNode.parentNode.getElementsByTagName("TR")
    for (let i=0;i<parent.length;i++){
        for (let j=0;j < parent[i].getElementsByTagName("TD").length;j++){
            parent[i].getElementsByTagName("TD")[j].style["background-color"] = "white";
            parent[i].getElementsByTagName("TD")[j].style["color"] = "black";

        }
    }
    event.style["background-color"] =  "#000000";
    event.style["color"] =  "white";
}
//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}