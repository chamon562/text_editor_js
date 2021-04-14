/**
 * TODO = DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO = DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO = DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO = : Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */

// let text = document.getElementById("text-input");
// console.log(text)
updateText = () => {
  // // CODE GOES HERE
  //   console.log("hello im updating");
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerHTML = text;
  document
    .getElementById("text-output")
    .setAttribute("style", "white-space: pre;");
};
/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
makeBold = (elem) => {
  console.log(elem.classList.toggle("active"));
  console.log(elem);
  elem.classList.toggle("active");

  document.getElementById("text-output").classList.toggle("bold");
  //CODE GOES HERE
  //   console.log("line 31 of makeBold function onclick placed in index.html",this.text);
};

/**
 * Toggle the italic class for the output text
 */
makeItalic = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
};

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
makeUnderline = (elem) => {
  elem.classList.toggle("active");
  let formattedText = document.getElementById("text-output");
  formattedText.classList.contains("underline")
    ? formattedText.classList.remove("underline")
    : formattedText.classList.add("underline");
  // if (formattedText.classList.contains("underline")) {
  //   formattedText.classList.remove("underline");
  //   console.log(formattedText, "remove underline class");
  // } else {
  //   formattedText.classList.add("underline");
  //   console.log(formattedText, "add underline class");
  // }
  //CODE GOES HERE
};

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
alignText = (elem, alignType) => {
  // CODE GOES HERE
  //   set the active state get the element.classlist
  elem.classList.toggle("active");
  console.log(alignType);
  document.getElementById("text-output").style.textAlign = alignType;
  let alignButtons = document.getElementsByClassName("align");
  console.log(alignButtons);
  // .map TypeError: alignButtons.map is not a function
  // at alignText (app.js:84)
  // at HTMLButtonElement.onclick (index.html:53)
  // The reason for error because alignButtons is not an array and .map and .forEach is for looping throug arrays.
  // alignButtons is a html collection it looks like an array it has a length but does not have same property of an array. it doesnt contain forEach or map
  // need to use external for of loop
  for (let button of alignButtons) {
    button.classList.remove("active");
    console.log(button)
  }
  // let btnLists = document.querySelectorAll("align").forEach((btn) => {
  //   btn.classList.remove("active");
  // });
  // console.log(btnLists);
  // console.log(btnList.forEach())
  // btnList.map((btn) => {
  //   btn.classList.remove("active");
  // });
  // for (let i = 0; i < btnList.length; i++) {
  //   btnList[i].classList.remove("active");
  //   console.log(btnList[i]);
  // }
  elem.classList.add("acitve");
};
