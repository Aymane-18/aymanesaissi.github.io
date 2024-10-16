function toggleSection(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function openModal(imageSrc, imageAlt) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = imageAlt;

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
}
