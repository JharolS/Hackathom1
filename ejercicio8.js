let menuBefore = {
    width: 200,
    height: 300,
    title: "My menu"
}

function multiplyNumeric(obj){
    let {width,height,title} = obj
    this.width = width*2,
    this.height = height*2;
    this.title = title;
}
let menuAfter = new multiplyNumeric(menuBefore)

console.log(menuAfter)