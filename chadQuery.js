window.onload = () => {
  chad("#app").append(chad("#app"));
};

let chad = (...args) => {
  if (typeof args[0] === "string") {
    collection = document.querySelectorAll(args[0]);

    // TODO Implementation for Arrays
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

    collection.append = (htmlString) => {
      if (typeof htmlString === "string") {
        collection.forEach((item) => {
          item.innerHTML += htmlString;
        });
      } else if (htmlString instanceof NodeList) {
        child = document.createElement(htmlString[0].tagName);
        collection.forEach((item) => {
          for (attrib of htmlString[0].getAttributeNames()) {
            child.setAttribute(attrib, htmlString[0].getAttribute(attrib));
          }
        });
        // self.appendChild(child);
        // TODO implement this properly when brain is working, currently it generates empty mested tags
        collection.forEach((item) => item.appendChild(child));
      }
    };

    collection.on = (event, func) => {
      collection.forEach((item) => {
        item.addEventListener(event, func);
      });
    };

    return collection;
  }
};
