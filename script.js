function drawTree (treeHeight) {
for(let i=0; i<treeHeight; i++){
  var star = "";
  for(let j=i; j<treeHeight; j++){
    star += " ";
  }
  for(let k=0; k<(i*2)-1; k++){
    star += "*";
  }
  console.log(star);
}
}