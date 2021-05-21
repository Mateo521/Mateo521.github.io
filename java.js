
var rn = Math.floor((Math.random() * 150) + 60);
var rs = Math.floor((Math.random() * 11) + 4);
	var t = new Trianglify({
 x_gradient: Trianglify.colorbrewer.Spectral[rs],
    noiseIntensity: 0,
    cellsize: rn
});
var pattern = t.generate(window.innerWidth, window.innerWidth+200);
document.getElementById('hello').setAttribute('style', 'background-image: '+pattern.dataUrl);



const loader = document.querySelector(".backgroundloading");
window.onload = function(){
  setTimeout(function(){
    loader.style.opacity = "0";
    setTimeout(function(){
      loader.style.display = "none";
    }, 500);
  },1500);
}




const indicator = document.querySelector(".nav-indicator");
const items = document.querySelectorAll(".nav-item");

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove("is-active");
    item.removeAttribute("style");
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute("active-color");

  el.classList.add("is-active");
  el.style.color = el.getAttribute("active-color");
}

items.forEach((item, index) => {
  item.addEventListener("click", e => {
    handleIndicator(e.target);
  });
  item.classList.contains("is-active") && handleIndicator(item);
});







(function () {
	"use strict";

	const ClickyMenus = function (menu) {
		// DOM element(s)
		let container = menu.parentElement,
			currentMenuItem,
			i,
			len;

		this.init = function () {
			menuSetup();
			document.addEventListener("click", closeOpenMenu);
		};

		/*===================================================
		=            Menu Open / Close Functions            =
		===================================================*/
		function toggleOnMenuClick(e) {
			const button = e.currentTarget;

			// close open menu if there is one
			if (currentMenuItem && button !== currentMenuItem) {
				toggleSubmenu(currentMenuItem);
			}

			toggleSubmenu(button);
		}

		function toggleSubmenu(button) {
			const submenu = document.getElementById(
				button.getAttribute("aria-controls")
			);

			if ("true" === button.getAttribute("aria-expanded")) {
				button.setAttribute("aria-expanded", false);
				submenu.setAttribute("aria-hidden", true);
				currentMenuItem = false;
			} else {
				button.setAttribute("aria-expanded", true);
				submenu.setAttribute("aria-hidden", false);
				preventOffScreenSubmenu(submenu);
				currentMenuItem = button;
			}
		}

		function preventOffScreenSubmenu(submenu) {
			const screenWidth =
					window.innerWidth ||
					document.documentElement.clientWidth ||
					document.body.clientWidth,
				parent = submenu.offsetParent,
				menuLeftEdge = parent.getBoundingClientRect().left,
				menuRightEdge = menuLeftEdge + submenu.offsetWidth;

			if (menuRightEdge + 32 > screenWidth) {
				// adding 32 so it's not too close
				submenu.classList.add("sub-menu--right");
			}
		}

		function closeOnEscKey(e) {
			if (27 === e.keyCode) {
				// we're in a submenu item
				if (null !== e.target.closest('ul[aria-hidden="false"]')) {
					currentMenuItem.focus();
					toggleSubmenu(currentMenuItem);

					// we're on a parent item
				} else if ("true" === e.target.getAttribute("aria-expanded")) {
					toggleSubmenu(currentMenuItem);
				}
			}
		}

		function closeOpenMenu(e) {
			if (currentMenuItem && !e.target.closest("#" + container.id)) {
				toggleSubmenu(currentMenuItem);
			}
		}

		/*===========================================================
		=            Modify Menu Markup & Bind Listeners            =
		=============================================================*/
		function menuSetup() {
			menu.classList.remove("no-js");

			menu.querySelectorAll("ul").forEach((submenu) => {
				const menuItem = submenu.parentElement;

				if ("undefined" !== typeof submenu) {
					let button = convertLinkToButton(menuItem);

					setUpAria(submenu, button);

					// bind event listener to button
					button.addEventListener("click", toggleOnMenuClick);
					menu.addEventListener("keyup", closeOnEscKey);
				}
			});
		}

		/**
		 * Why do this? See https://justmarkup.com/articles/2019-01-21-the-link-to-button-enhancement/
		 */
		function convertLinkToButton(menuItem) {
			const link = menuItem.getElementsByTagName("a")[0],
				linkHTML = link.innerHTML,
				linkAtts = link.attributes,
				button = document.createElement("button");

			if (null !== link) {
				// set button content and attributes
				button.innerHTML = linkHTML.trim();
				for (i = 0, len = linkAtts.length; i < len; i++) {
					let attr = linkAtts[i];
					if ("href" !== attr.name) {
						button.setAttribute(attr.name, attr.value);
					}
				}

				menuItem.replaceChild(button, link);
			}

			return button;
		}

		function setUpAria(submenu, button) {
			const submenuId = submenu.getAttribute("id");

			let id;
			if (null === submenuId) {
				id =
					button.textContent.trim().replace(/\s+/g, "-").toLowerCase() + "-submenu";
			} else {
				id = menuItemId + "-submenu";
			}

			// set button ARIA
			button.setAttribute("aria-controls", id);
			button.setAttribute("aria-expanded", false);

			// set submenu ARIA
			submenu.setAttribute("id", id);
			submenu.setAttribute("aria-hidden", true);
		}
	};

	/* Create a ClickMenus object and initiate menu for any menu with .clicky-menu class */
	document.addEventListener("DOMContentLoaded", function () {
		const menus = document.querySelectorAll(".clicky-menu");

		menus.forEach((menu) => {
			let clickyMenu = new ClickyMenus(menu);
			clickyMenu.init();
		});
	});
})();



function myFunction() {
	var x = document.getElementById("site-navigation");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }

  /*
  function color() {
	var x = document.getElementById("menu-mobile");
	if (x.style.visibility != "visible") {
	  x.style.color = "black";
	} else {
	  x.style.color = "#fff";
	}
  }
*/



  