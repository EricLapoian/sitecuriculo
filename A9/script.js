document.addEventListener("DOMContentLoaded", function() {
    const rectangle = document.getElementById("rectangle");
    const borderRadiusRange = document.getElementById("border-radius-slider");
    const topLeftCheckbox = document.getElementById("top-left");
    const topRightCheckbox = document.getElementById("top-right");
    const bottomLeftCheckbox = document.getElementById("bottom-left");
    const bottomRightCheckbox = document.getElementById("bottom-right");
  
    function updateBorderRadius() {
      const borderRadiusValue = borderRadiusRange.value;
      const topLeft = topLeftCheckbox.checked ? `${borderRadiusValue}px` : "0";
      const topRight = topRightCheckbox.checked ? `${borderRadiusValue}px` : "0";
      const bottomLeft = bottomLeftCheckbox.checked ? `${borderRadiusValue}px` : "0";
      const bottomRight = bottomRightCheckbox.checked ? `${borderRadiusValue}px` : "0";
  
      rectangle.style.borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
    }
  
    borderRadiusRange.addEventListener("input", updateBorderRadius);
    topLeftCheckbox.addEventListener("change", updateBorderRadius);
    topRightCheckbox.addEventListener("change", updateBorderRadius);
    bottomLeftCheckbox.addEventListener("change", updateBorderRadius);
    bottomRightCheckbox.addEventListener("change", updateBorderRadius);
  });
  