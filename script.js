function drawTree (treeHeight) {
for(let i=1; i<treeHeight+1; i++){
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