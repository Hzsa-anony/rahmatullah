document.addEventListener("DOMContentLoaded", () => {
    const registerSection = document.getElementById("register-section");
    const homeSection = document.getElementById("home-section");

    function sendEmail(event) {
        event.preventDefault();

        // Simpan data form
        const nama = document.getElementById("nama").value;
        const alamat = document.getElementById("alamat").value;
        const ktp = document.getElementById("ktp").value;
        const password = document.getElementById("password").value;

        // Kode mengirim email (gunakan API email, misalnya EmailJS)

        alert("Data telah dikirim ke rahmatullah!");
        registerSection.style.display = "none";
        homeSection.style.display = "block";
    }

    // Fungsi slider
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider) => {
        let index = 0;
        setInterval(() => {
            index = (index + 1) % slider.children.length;
            slider.style.transform = `translateX(-${index * 100}%)`;
        }, 3000);
    });
});
