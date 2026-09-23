function scrollToTemplates() {
    document.getElementById("templates").scrollIntoView({
        behavior: "smooth"
    });
}

function chooseBirthday() {
    document.getElementById("home").style.display = "none";
    document.getElementById("templates").style.display = "none";
    document.getElementById("builder").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function goHome() {
    document.getElementById("builder").style.display = "none";
    document.getElementById("home").style.display = "flex";
    document.getElementById("templates").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function updatePreview() {
    const name = document.getElementById("recipientName").value;

    if (name.trim() === "") {
        document.getElementById("previewName").innerText =
            "Someone Special ❤️";
    } else {
        document.getElementById("previewName").innerText = name;
    }

    const message = document.getElementById("message").value;

    if (message.trim() === "") {
        document.getElementById("previewMessage").innerText =
            "Your beautiful birthday message will appear here...";
    } else {
        document.getElementById("previewMessage").innerText = message;
    }
}

function changeTheme(theme) {

    const preview = document.getElementById("giftPreview");

    preview.classList.remove(
        "pink-theme",
        "purple-theme",
        "dark-theme"
    );

    preview.classList.add(theme + "-theme");
}

function previewPhotos(event) {
    const files = event.target.files;
    const preview = document.getElementById("photoGallery");

    preview.innerHTML = "";

    if (!files.length) return;

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const image = document.createElement("img");

            image.src = e.target.result;
            image.className = "gallery-photo";

            preview.appendChild(image);
        };

        reader.readAsDataURL(files[i]);
    }
}
