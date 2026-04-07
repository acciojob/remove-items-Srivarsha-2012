//your JS code here. If required.
function removeColor() {
    // Get the dropdown element
    let select = document.getElementById("colorSelect");

    // Get the selected index
    let selectedIndex = select.selectedIndex;

    // Remove the selected option
    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }
}