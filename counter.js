// ===================== COUNTER =====================
let array = document.querySelectorAll("button");
let display = document.getElementById("input");
let counter = 0;

array.forEach((val)=>{
    val.addEventListener("click",(e)=>{
        if(e.target.innerText == "+"){
            counter++;
            display.value = counter;
        }
        else if(e.target.innerText == "-"){
            counter--;
            display.value = counter;
        }
        else if(val.classList.contains("rotate")){
            counter = 0;
            display.value = counter;
        }
    })
});

// ===================== POPUPS =====================
let gearBtn = document.querySelector(".gearBtn");
let heartBtn = document.querySelector(".heartBtn");

let popupOverlay = document.getElementById("popupOverlay");
let popupTitle = document.getElementById("popupTitle");
let popupDynamic = document.getElementById("popupDynamic");
let closeBtn = document.querySelector(".closePopup");

// OPEN SETTINGS POPUP
gearBtn.addEventListener("click", () => {
    popupTitle.innerText = "Settings";

    popupDynamic.innerHTML = `
        <div class="popupItem">
            <span>Dark Mode</span>
            <label class="switch">
                <input type="checkbox" id="darkMode">
                <span class="slider"></span>
            </label>
        </div>

        <div class="popupItem">
            <span>Sound</span>
            <label class="switch">
                <input type="checkbox" id="soundToggle">
                <span class="slider"></span>
            </label>
        </div>

        <div class="popupItem">
            <span>Max Limit</span>
            <input type="number" id="maxLimit" placeholder="Enter limit" style="width:90px;padding:5px;border-radius:8px;border:none;">
        </div>

        <div class="actionBtns">
            <button class="actionBtn" id="saveSettings">Save</button>
            <button class="actionBtn" id="resetSettings">Reset</button>
        </div>
    `;

    popupOverlay.style.display = "flex";
});

// OPEN FAVORITES POPUP
heartBtn.addEventListener("click", () => {
    popupTitle.innerText = "Favorites";

    popupDynamic.innerHTML = `
        <p style="opacity:.9;">Favorite items will appear here.</p>
        <button class="actionBtn" style="margin-top:15px;">Add Favorite</button>
    `;

    popupOverlay.style.display = "flex";
});

// CLOSE POPUP
closeBtn.addEventListener("click", () => {
    popupOverlay.style.display = "none";
});
