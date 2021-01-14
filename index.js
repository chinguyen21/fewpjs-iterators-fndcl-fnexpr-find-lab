const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  const t = array.find(season => season.result === "W")
  return t ? t.year : t
};
