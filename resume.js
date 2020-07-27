let fotoLink = document.querySelector(".portfolio-items_img");
let fotoLink2 = document.querySelector(".portfolio-items_img_2");
let fotoPopup = document.querySelector(".modal-foto");
//let fotoPopup2 = document.querySelector(".modal-foto_2");
let fotoPopup2 = document.querySelector("[name=foto_2]");
let fotoClose = fotoPopup.querySelector(".modal-close");
let fotoClose2 = fotoPopup2.querySelector(".modal-close");


fotoLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	fotoPopup.classList.remove("modal-hidden");
	fotoPopup.classList.add("modal-show");
	//mapOverlay.classList.remove("modal-hidden");
});

fotoLink2.addEventListener("click", function (evt) {
	evt.preventDefault();
	fotoPopup2.classList.remove("modal-hidden");
	fotoPopup2.classList.add("modal-show");
	//mapOverlay.classList.remove("modal-hidden");
});

fotoClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	fotoPopup.classList.add("modal-hidden");
	//mapOverlay.classList.add("modal-hidden");
});

fotoClose2.addEventListener("click", function (evt) {
	evt.preventDefault();
	fotoPopup2.classList.add("modal-hidden");
	//mapOverlay.classList.add("modal-hidden");
});


let mapLink = document.querySelector(".contacts-button-map");
let mapPopup = document.querySelector(".modal-map");
let mapOverlay = document.querySelector(".modal-overlay");
let mapClose = mapPopup.querySelector(".modal-close");


mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
	mapOverlay.classList.remove("modal-hidden");
});


mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
	mapOverlay.classList.add("modal-hidden");
});

mapOverlay.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
	mapOverlay.classList.add("modal-hidden");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (mapPopup.classList.contains("modal-show") || (fotoPopup.classList.contains("modal-show")) || (
				fotoPopup2.classList.contains("modal-show"))) {
			evt.preventDefault();
			mapPopup.classList.remove("modal-show");
			mapOverlay.classList.add("modal-hidden");
			fotoPopup.classList.add("modal-hidden");
			fotoPopup2.classList.add("modal-hidden");
		}
		//if (fotoPopup.classList.contains("modal-show")) {
		//	fotoPopup.classList.add("modal-hidden");

		//}

	}
});

//let link = document.querySelector(".login-link");

//let popup = document.querySelector(".modal-login");
//let close = popup.querySelector(".modal-close");

//let form = popup.querySelector("form");
//let login = popup.querySelector("[name=login]");
//let password = popup.querySelector("[name=password]");

//let isStorageSupport = true;
//let storage = "";

//try {
//	storage = localStorage.getItem("login");
//} catch (err) {
//	isStorageSupport = false;
//}

//link.addEventListener("click", function (evt) {
//	evt.preventDefault();
//	popup.classList.add("modal-show");

//	if (storage) {
//		login.value = storage;
//		password.focus();
//	} else {
//		login.focus();
//	}
//});

//close.addEventListener("click", function (evt) {
//	evt.preventDefault();
//	popup.classList.remove("modal-show");
//	popup.classList.remove("modal-error");
//});

//form.addEventListener("submit", function (evt) {
//	if (!login.value || !password.value) {
//		evt.preventDefault();
//		popup.classList.remove("modal-error");
//		popup.offsetWidth = popup.offsetWidth;
//		popup.classList.add("modal-error");
//	} else {
//		if (isStorageSupport) {
//			localStorage.setItem("login", login.value);
//		}
//	}
//});

//window.addEventListener("keydown", function (evt) {
//	if (evt.keyCode === 27) {
//		evt.preventDefault();
//		if (popup.classList.contains("modal-show")) {
//			popup.classList.remove("modal-show");
//			popup.classList.remove("modal-error");
//		}
//	}
//});