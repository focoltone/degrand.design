(function() {
    new Headroom(document.querySelector("#header"), {
        tolerance: 2,
        offset : 105,
        classes: {
          initial: "slide",
          pinned: "slide--reset",
          unpinned: "slide--up"
        }
    }).init();

}());