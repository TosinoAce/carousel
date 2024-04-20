const carouselItems = document.querySelectorAll(".carousel-images");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let timeAutoNext = 8000;


next.addEventListener("click", () => {
  nextItem();
});
prev.addEventListener("click", () => {
  prevItem();
});



setInterval(() => {
  next.click();
}, timeAutoNext)



function nextItem() {
  function findIndexByClassName(items, className) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains(className)) {
        return i;
      }
    }
    // Return -1 if class name is not found in any element
    return -1;
  }
  // Function to remove class from current item and add it to the next item
  function shiftClassToNext(items, className) {
    var currentIndex = findIndexByClassName(items, className);

    if (currentIndex !== -1) {
      // Add class to current item for fading out
      if (items[currentIndex].classList.contains("fade-out")) {
        items[currentIndex].classList.remove("fade-out");
      } else {
        items[currentIndex].classList.remove("fade-in");
      }

      // After 5 seconds, remove the class and calculate index of next item
      setTimeout(function () {
        items[currentIndex].classList.remove(className);

        // Calculate index of next item
        var nextIndex = (currentIndex + 1) % items.length;

        // Add class to next item
        items[nextIndex].classList.add("fade-in");
        items[nextIndex].classList.add(className);
      }, 300);
      // items[currentIndex].classList.remove("fade-out")
    }
  }
  shiftClassToNext(carouselItems, "opacity");
}

// Usage example

function prevItem() {
  function findIndexByClassName2(items, className) {
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains(className)) {
        return i;
      }
    }
    // Return -1 if class name is not found in any element
    return -1;
  }
  // Function to remove class from current item and add it to the next item
  function shiftClassToPrev(items, className) {
    var currentIndex = findIndexByClassName2(items, className);

    function findPreviousIndex(items, currentIndex) {
      // Check if the current index is valid
      if (currentIndex <= 0 || currentIndex >= items.length) {
        return -1; // Index out of bounds
      }

      // Calculate the previous index
      var previousIndex = currentIndex - 1;
      return previousIndex;
    }

    var previousIndex = findPreviousIndex(carouselItems, currentIndex);

    // Check if previous index is valid
    if (previousIndex !== -1) {
      if (items[currentIndex].classList.contains("fade-in")) {
        items[currentIndex].classList.remove("fade-in");
      } else {
        items[currentIndex].classList.remove("fade-out");
      }
      setTimeout(function () {
        items[currentIndex].classList.remove(className);
        items[previousIndex].classList.add("fade-out");
        items[previousIndex].classList.add(className);
      }, 300);
    } else {
      let previousIndex = 3;
      if (items[currentIndex].classList.contains("fade-in")) {
        items[currentIndex].classList.remove("fade-in");
      } else {
        items[currentIndex].classList.remove("fade-out");
      }
      setTimeout(function () {
        items[currentIndex].classList.remove(className);
        items[previousIndex].classList.add("fade-out");
        items[previousIndex].classList.add(className);
      }, 300);
    }
  }
  shiftClassToPrev(carouselItems, "opacity");
}
