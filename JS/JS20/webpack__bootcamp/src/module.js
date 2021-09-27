// function hey() {
//   console.log("hey");
// }

// export default hey;

import moment from "../node_modules/moment";

function niceDay() {
  console.log("have a nice" + moment().format("dddd"));
}

export default niceDay;
