module.exports = (args) => {
  const fs = require('fs');
  fs.appendFile("./data/buyData", "\nHey there!", function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}