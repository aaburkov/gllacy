var feedback = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector(".modal-feedback__form")
var userName = popup.querySelector(".modal-feedback__user-name");
var mail = popup.querySelector(".modal-feedback__email");
var message = popup.querySelector(".modal-feedback__text");
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("userName");
} catch (err) {
	isStorageSupport = false;
}

feedback.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storage) {
		userName.value = storage;
		mail.focus();
	} else {
		userName.focus();
	}
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
	if (!userName.value || !mail.value || !message.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if(isStorageSupport){
			local.Storage.setItem("userName", userName.value);
		}
	}
});

window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
})

var slide1 = document.querySelector(".page-slider__item-1");
var slide2 = document.querySelector(".page-slider__item-2");
var slide3 = document.querySelector(".page-slider__item-3");
var slideControl1 = document.querySelector(".page-slider__button-1");
var slideControl2 = document.querySelector(".page-slider__button-2");
var slideControl3 = document.querySelector(".page-slider__button-3");
var background = document.querySelector("body")

slideControl1.addEventListener("click", function(evt) {
	background.classList.remove("slider2-bg");
	background.classList.remove("slider3-bg");
	background.classList.add("slider1-bg");
	slide1.classList.add("slide-show");
	slide2.classList.remove("slide-show");
	slide3.classList.remove("slide-show");
	slideControl1.classList.add("page-slider__button--active");
	slideControl2.classList.remove("page-slider__button--active");
	slideControl3.classList.remove("page-slider__button--active");
})

slideControl2.addEventListener("click", function(evt) {
	background.classList.add("slider2-bg");
	background.classList.remove("slider3-bg");
	background.classList.remove("slider1-bg");	slide2.classList.add("slide-show");
	slide1.classList.remove("slide-show");
	slide3.classList.remove("slide-show");
	slideControl2.classList.add("page-slider__button--active");
	slideControl1.classList.remove("page-slider__button--active");
	slideControl3.classList.remove("page-slider__button--active");
})

slideControl3.addEventListener("click", function(evt) {
	background.classList.remove("slider2-bg");
	background.classList.add("slider3-bg");
	background.classList.remove("slider1-bg");
	slide3.classList.add("slide-show");
	slide2.classList.remove("slide-show");
	slide1.classList.remove("slide-show");
	slideControl3.classList.add("page-slider__button--active");
	slideControl2.classList.remove("page-slider__button--active");
	slideControl1.classList.remove("page-slider__button--active");
})
console.log(slideControl1);
console.log(slideControl2);
console.log(slideControl3);
console.log(slide1);
console.log(slide2);
console.log(slide3);


/*function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(59.9992618,30.3648466)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "http://i.neoseeker.com/mgv/499846/846/33/15847_179440563793_179437393793_2772323_4548598_n_icon.jpg";
  var myLatLng = new google.maps.LatLng(59.999,30.364);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);*/