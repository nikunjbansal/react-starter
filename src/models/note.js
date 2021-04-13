import { v4 as uuidv4 } from "uuid";
const AllStatus = ["enqueued", "active", "completed"]

function Note(title) {
  this.id = uuidv4();
  this.title = title;
  this.status = AllStatus[0];
}

/**
 * Notice how arrow function is not used here, instead we used
 * the regular function notation. This is because arrow function do
 * not provide lexical `this`. In arrow function, `this` refers to
 * the context when function was being evaluated, instead of
 * using the object's context in case of regular functions.
 */
Note.prototype.handleStatusChange = function () {
  let currentIndex = AllStatus.findIndex((s) => s === this.status);
  if (++currentIndex == AllStatus.length) {
    currentIndex = 0;
  }
  // mock api call delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      this.status = AllStatus[currentIndex];
      resolve();
    }, 1000);
  });
};

export default Note;