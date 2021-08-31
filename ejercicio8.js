let menuBefore = {
    width: 200,
    height: 300,
    title: "My menu"
}

function multiplyNumeric(obj){
    this.obj=obj.width*2,
    this.obj=obj.height*2;
    this.obj=obj.title;
}
let menuAfter = new multiplyNumeric(menuBefore)

console.log(menuAfter)