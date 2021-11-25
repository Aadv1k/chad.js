window.onload = () => {
  // the chad way
  app = chad("#app");
  aloha = prompt("Sike");
  app.append(
    `<div id='hmm' class='foo' style='background: gray;'>${aloha}</div>`
  );
};

// TODO Implement more selectors
function chad(element) {
  if (element[0] == "#") {
    return document.getElementById(element.substring(1));
  } else if (element[0] == ".") {
    return document.getElementsByClassName(element.substring(1));
  } else {
    return document.getElementsByTagName(element);
  }
}

function parseHtmlString(htmlString) {
  tag = htmlString.substring(
    htmlString.indexOf("<") + 1,
    htmlString.indexOf(" ")
  );
  console.log(tag);

  dict = { atribs: [] };
  parser = new DOMParser();
  parsedHtml = parser
    .parseFromString(htmlString, "text/html")
    .getElementsByTagName(tag)[0];

  dict["innerText"] = parsedHtml.innerText;
  dict["tag"] = tag;

  for (atrib of parsedHtml.getAttributeNames()) {
    dict["atribs"].push({
      item: atrib,
      value: parsedHtml.getAttribute(atrib),
    });
  }
  return dict;
}

// DOM insertion
app.append = function (string) {
  data = parseHtmlString(string);
  child = document.createElement(data["tag"]);
  child.innerText = data["innerText"];
  for (atrib of data["atribs"]) {
    child.setAttribute(atrib["item"], atrib["value"]);
  }

  this.appendChild(child);
};

app.prepend = function (string) {
  result = document.createChild("");

  if (typeof string == "string") {
    this.innerHTML = text.substring(0, 0) + string + text.substring();
  } else {
    this.innerHTML = text.substring(0, 0) + string.innerHTML + text.substring();
  }
};

// Class attribute manipulation
app.addClass = function (className) {
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
  let classNames;
  if (checkArray(className)) {
    classNames = [...className];
  } else {
    classNames = className.split(" ");
  }
  classNames.forEach((e) => {
    this.classList.toggle(e);
  });
};

// DOM removal
app.unwrap = function () {
  return this.innerHTML;
};

function checkArray(arr) {
  return Array.isArray(arr);
}
