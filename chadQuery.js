window.onload = () => {
  chad("#app").append("h1", "I got appended", {
    style: "background: lightgray; font-family: monospace; font-weight: light",
    align: "center",
  });
};

let chad = (...args) => {
  if (typeof args[0] === "string") {
    collection = document.querySelectorAll(args[0]);

    // Add class
    collection.addClass = (classString) => {
      classes = classString.split(" ");
      collection.forEach((item) => {
        classes.forEach((cl) => {
          item.classList.add(cl);
        });
      });
    };

    // Remove class
    collection.removeClass = (classString) => {
      classes = classString.split(" ");
      collection.forEach((item) => {
        classes.forEach((cl) => {
          item.classList.remove(cl);
        });
      });
    };

    // Toggle class
    collection.toggleClass = (classString) => {
      classes = classString.split(" ");
      collection.forEach((item) => {
        classes.forEach((cl) => {
          item.classList.toggle(cl);
        });
      });
    };

    // Has class
    collection.hasClass = (classString) => {
      classes = classString.split(" ");
      bool = [];
      collection.forEach((item) => {
        classes.forEach((cl) => {
          cl = cl.trim();
          res = item.classList.contains(cl);
          bool.push(res);
        });
      });
      return bool.every((e) => e !== false);
    };

    collection.append = (tag, inner, atribs) => {
      child = document.createElement(tag);
      child.innerText = inner;

      collection.forEach((item) => {
        for (key in atribs) {
          item.setAttribute(key, atribs[key]);
          item.append(child);
        }
      });
    };

    // Event handler
    collection.on = (event, func) => {
      collection.forEach((item) => {
        item.addEventListener(event, func);
      });
    };

    return collection;
  }
};
