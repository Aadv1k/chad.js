window.onload = () => {
  // the chad way
  chad("#app").append("<h1>Hello chad</h1>");
  // Noob way
  // document.getElementById("app").innerHTML += "<h1>Hello chad</h1>";
};

// TODO Implement more selectors
function chad(element) {
  if (element[0] == "#") {
    return document.getElementById(element.substring(1));
  } else if (element[0] == ".") {
    return document.getElementsByClassName(element.substring(1));
  } else if (element[0] == "<") {
    tag = element.substring(element.indexOf("<") + 1, element.indexOf(">"));
    return document.getElementsByTagName(tag);
  } else {
    return document.getElementById(element);
  }
}

// DOM insertion
app.prepend = function (string) {
  text = this.innerHTML;

  if (typeof string == "string") {
    this.innerHTML = text.substring(0, 0) + string + text.substring();
  } else {
    this.innerHTML = text.substring(0, 0) + string.innerHTML + text.substring();
  }
};

app.append = function (string) {
  if (typeof string == "string") {
    this.innerHTML += string;
  } else {
    this.innerHTML += string.innerHTML;
  }
};

// Class attribute manipulation
app.setClass = function (className) {
  if (checkArray(className)) {
    classNames = [...className];
  } else {
    classNames = className.split(" ");
  }

  classNames.forEach((e) => {
    this.classList.add(e);
  });
};

app.removeClass = function (className) {
  if (checkArray(className)) {
    classNames = [...className];
  } else {
    classNames = className.split(" ");
  }

  classNames.forEach((e) => {
    this.classList.remove(e);
  });
};

app.hasClass = function (className) {
  return this.classList.contains(className);
};

app.toggleClass = function (className) {
  if (checkArray(className)) {
    classNames = [...className];
  } else {
    classNames = className.split(" ");
  }
  classNames.forEach((e) => {
    this.classList.toggle(e);
  });
};

function checkArray(arr) {
  return Array.isArray(arr);
}
