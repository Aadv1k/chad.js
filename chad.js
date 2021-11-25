function chad(selector) {
  let self = document.querySelector(selector);

  // TODO html parser
  // DOM manipulation
  self.append = (tag, text) => {
    child = document.createElement(tag);
    child.innerText = text;
    self.appendChild(child);
  };

  self.prepend = (tag, text) => {
    child = document.createElement(tag);
    child.innerText = text;
    self.insertBefore(child, self.firstChild);
  };

  // Class attribute manipulation
  self.addClass = function (className) {
    if (Array.isArray(className)) {
      classNames = [...className];
    } else {
      classNames = className.split(" ");
    }

    classNames.forEach((e) => {
      self.classList.add(e);
    });
  };

  self.removeClass = function (className) {
    if (Array.isArray(className)) {
      classNames = [...className];
    } else {
      classNames = className.split(" ");
    }

    classNames.forEach((e) => {
      self.classList.remove(e);
    });
  };

  self.hasClass = function (className) {
    return self.classList.contains(className);
  };

  self.toggleClass = function (className) {
    let classNames;
    if (Array.isArray(className)) {
      classNames = [...className];
    } else {
      classNames = className.split(" ");
    }
    classNames.forEach((e) => {
      self.classList.toggle(e);
    });
  };

  // EVENT LISTENERS
  self.click = (func) => {
    self.addEventListener("click", func);
  };

  self.on = (event, func) => {
    self.addEventListener(event, func);
  };

  return self;
}

window.onload = () => {
  $ = chad("#app");
  $.addClass("foo bar baz");

  $.click(() => {
    $.toggleClass("foo");
  });
};
