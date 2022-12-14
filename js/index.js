window.addEventListener("load", function () {
  var focus = document.querySelector(".focus");
  var ul = focus.querySelector("ul");
  var ol = focus.querySelector("ol");
  var w = focus.offsetWidth;
  // console.log(w);
  for (var i = 0; i < ul.childElementCount; i++) {
    var li = this.document.createElement("li");
    li.setAttribute("index", i);
    ol.appendChild(li);
  }
  ol.children[0].className = "bsl";
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  var index = 0;
  var timer = this.setInterval(function () {
    index++;
    var translatex = -index * w;
    ul.style.transition = "all 0.5s";
    ul.style.transform = "translateX(" + translatex + "px)";
  }, 2000);
  ul.addEventListener("transitionend", function () {
    if (index >= 3) {
      index = 0;
      ul.style.transition = "none";
      var translatex = -index * w;
      ul.style.transform = "translateX(" + translatex + "px)";
    } else if (index < 0) {
      index = 2;
      ul.style.transition = "none";
      var translatex = -index * w;
      ul.style.transform = "translateX(" + translatex + "px)";
    }
    ol.querySelector(".bsl").classList.remove("bsl");
    ol.children[index].classList.add("bsl");
  });
  var startX = 0;
  var moveX;
  ul.addEventListener("touchstart", function (e) {
    clearInterval(timer);
    startX = e.targetTouches[0].pageX;
  });
  ul.addEventListener("touchmove", function (e) {
    ul.style.transition = "none";
    moveX = e.targetTouches[0].pageX - startX;
    var translatex = -index * w + moveX;
    ul.style.transform = "translateX(" + translatex + "px)";
  });
  ul.addEventListener("touchend", function (e) {
    if (Math.abs(moveX) > 50) {
      if (moveX > 0) {
        index--;
      } else {
        index++;
      }
      var translatex = -index * w;
      ul.style.transition = "all .5s";
      ul.style.transform = "translateX(" + translatex + "px)";
    } else {
      var translatex = -index * w;
      ul.style.transition = "all .5s";
      ul.style.transform = "translateX(" + translatex + "px)";
    }
    timer = setInterval(function () {
      index++;
      var translatex = -index * w;
      ul.style.transition = "all 0.5s";
      ul.style.transform = "translateX(" + translatex + "px)";
    }, 2000);
  });
  var bg = document.querySelector(".gd");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 100) {
      bg.style.display = "block";
    } else {
      bg.style.display = "none";
    }
  });
  bg.addEventListener("click", function () {
    animate(window, 0);
  });
  function animate(obj, target, callback) {
    //????????????????????????????????????
    // console.log(callback);
    clearInterval(obj.timer); //???????????????????????????????????????????????????????????????????????????????????????????????????????????????
    obj.timer = setInterval(function () {
      //???????????????????????????
      var step = (target - window.pageYOffset) / 10; //??????????????????????????????
      step = step > 0 ? Math.ceil(step) : Math.floor(step); //????????????????????????????????????????????????-
      // console.log(obj.offsetLeft);
      // console.log(step);
      if (window.pageYOffset == target) {
        //???????????????px??????????????????
        clearInterval(obj.timer);
        // ????????????????????????????????????
        callback && callback();
      } else {
        window.scroll(0, window.pageYOffset + step); //????????????????????????1px
      }
    }, 15);
  }
});
