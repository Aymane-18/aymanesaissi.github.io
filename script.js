function toggleSection(id) {
    var content = document.getElementById(id);
    var button = document.querySelector(`[onclick="toggleSection('${id}')"]`);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "Hide Details"; // Change button text
    } else {
        content.style.display = "none";
        button.textContent = "Show Details"; // Revert button text
    }
}
