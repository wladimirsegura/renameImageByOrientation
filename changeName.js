
const dir = process.argv[2]; // ← 変更してね
console.log(dir)

const fs = require("fs");
const path = require("path");
const sizeOf = require('image-size')
const fileNameList = fs.readdirSync(dir);
console.log(fileNameList)
// const targetFileNames = fileNameList.filter(RegExp.prototype.test, /.*\.JPG$/); // ← 変更してね
const targetFileNames = fileNameList
console.log(targetFileNames);

targetFileNames.forEach(fileName => {
  
  const filePath = {};
  filePath.before = path.join(dir, fileName);

  const dimensions = sizeOf(filePath.before)
  addHead = "P_"; // ← 変更してね
  if (dimensions.width > dimensions.height) addHead = "L"
  const newName = addHead + fileName;
  filePath.after = path.join(dir, newName);
  

  console.log(filePath);
  fs.rename(filePath.before, filePath.after, err => {
    if (err) throw err;
    console.log(filePath.before + "-->" + filePath.after);
  });
});


