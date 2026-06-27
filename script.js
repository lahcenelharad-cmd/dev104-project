function changeColor(){

    const colors=[
    "#0077ff",
    "#ff0000",
    "#00aa55",
    "#ff8800",
    "#8000ff",
    "#009999"
    ];
    
    document.querySelector(".hello").style.color=
    colors[Math.floor(Math.random()*colors.length)];
    
    }