const splitter = document.getElementById("splitter"); // Get the splitter element
    const topSide = document.querySelector(".codes"); // Get the top side content
    const bottomSide = document.querySelector(".output"); // Get the bottom side content

    let isResizing = false;

    splitter.addEventListener("mousedown", (e) => {
      isResizing = true;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });

    function onMouseMove(e) {
      if (!isResizing) return;

      const y = e.clientY;
      const containerRect = document
        .querySelector(".container")
        .getBoundingClientRect(); // Get the container's bounding box
      const containerHeight = containerRect.height;
      const dividerHeight = splitter.clientHeight;
      const minY = 100; // Set a minimum height for the top side
      const maxY = containerHeight - dividerHeight - 100; // Set a maximum height for the top side

      const newTopHeight = Math.min(
        maxY,
        Math.max(minY, y - containerRect.top)
      );
      topSide.style.flex = `0 0 ${newTopHeight}px`; // Set the new height of the top side
    }

    function onMouseUp() {
      isResizing = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }