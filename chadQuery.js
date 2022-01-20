// This was added inside foo!

window.onload = () => {
  chad("#app").append("<h1>Welcome to the jungle 🌲.</h1>");
};

let chad = (...args) => {
  if (typeof args[0] === "string") {
    collection = document.querySelectorAll(args[0]);

    // TODO Implementation for Arrays
    // Add class
    collection.addClass = (classString) => {
      // a slightly better implementation
      classes = typeof(classString) == 'string' ? classString.split(" ") : classString;

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
      collection.forEach((item) => {
        item.innerHTML += htmlString;
      });
    };

    collection.appendTo = (htmlString) => {
      if (htmlString instanceof NodeList) {
        collection.forEach((item) => {
          htmlString.forEach((target) => {
            target.innerHTML = target.innerHTML += item.innerHTML;
          });
        });
      }
    };

    collection.prepend = (htmlString) => {
      collection.forEach((item) => {
        item.innerHTML = htmlString + item.innerHTML.slice(0);
      });
    };

    collection.prependTo = (htmlString) => {
      if (htmlString instanceof NodeList) {
        collection.forEach((item) => {
          htmlString.forEach((target) => {
            target.innerHTML = item.innerHTML += target.innerHTML.slice(0);
          });
        });
      }
    };

		collection.html = () => {
			result = []
			collection.forEach((item) => {
				result.push(item.innerHTML)
			})
			return result
		}

		collection.text = () => {
			result = []
			collection.forEach((item) => {
				result.push(item.innerText)
			})
			return result
		}

    collection.on = (event, func) => {
      collection.forEach((item) => {
        item.addEventListener(event, func);
      });
    };

    return collection;
  }
};

