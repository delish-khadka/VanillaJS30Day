let checkboxes = document.querySelectorAll('.item [type="checkbox"]');
let lastChecked;
function onClick(e) {
  let inBetween = false;
  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      let inBetween = false;
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("click", onClick));
