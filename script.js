// =========================
// ELEMENTS
// =========================

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

const uidInput = document.getElementById("uid");

const continueBtn = document.getElementById("continueBtn");
const backBtn = document.querySelector(".backBtn");

const rewardCards = document.querySelectorAll(".reward-card");

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

// =========================
// CONTINUE BUTTON
// =========================

continueBtn.addEventListener("click", () => {

    const uid = uidInput.value.trim();

    if (uid.length < 12) {
        alert("Please enter a valid UID.");
        uidInput.focus();
        return;
    }

    screen1.classList.remove("active");
    screen2.classList.add("active");

});

// =========================
// BACK BUTTON
// =========================

backBtn.addEventListener("click", () => {

    screen2.classList.remove("active");
    screen1.classList.add("active");

});

// =========================
// REWARD CARD CLICK
// =========================

rewardCards.forEach(card => {

    card.addEventListener("click", () => {

        const diamonds = card.dataset.diamond;

        popupText.innerHTML = `
            <strong>${diamonds} Diamonds</strong><br><br>
            This is a <b>top interface</b> for UI reward only.<br>
            No real passwords are sent to any account.
        `;

        popup.style.display = "flex";

    });

});

// =========================
// CLOSE POPUP
// =========================

closePopup.addEventListener("click", () => {

    popup.style.display = "none";

});

popup.addEventListener("click", (e) => {

    if (e.target === popup) {
        popup.style.display = "none";
    }

});

// =========================
// ENTER KEY SUPPORT
// =========================

uidInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        continueBtn.click();
    }

});
