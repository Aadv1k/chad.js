window.onload = () => {
  chad("#app").append("<h1>Hello there <b>little</b> kid</h1>");
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

    /* 
    collection.append = (htmlString) => {
      let atribs = htmlString.slice(
        htmlString.indexOf("<") + 1,
        htmlString.indexOf(">")
      );

			let innerText = htmlString.slice(
        htmlString.indexOf(">") + 1,
        htmlString.indexOf("</")
      );
			console.log(atribs, innerText)

      atribList = atribs.split(" ");
      child = document.createElement(atribList[0]);
			child.innerText = innerText
			for (let i=1; i < atribList.length; i++) {
				child.setAttribute(
					(atribList[i]).split('=')[0], 
					((atribList[i]).split('=')[1]).replace(/"/g, "")
				)
			}
			collection.forEach(item => item.appendChild(child))
    };
		*/

    collection.on = (event, func) => {
      collection.forEach((item) => {
        item.addEventListener(event, func);
      });
    };

    return collection;
  }
};
