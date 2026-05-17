let userName = "Student";
document.getElementById("welcomeText").innerHTML = "Welcome, " + userName;

if (document.getElementById("profileWelcomeText")) {
    document.getElementById("profileWelcomeText").innerHTML = "Welcome, " + userName;
}

let buttons = document.querySelectorAll(".continue-btn");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Opening your course...");
    });
});

let menuItems = document.querySelectorAll(".sidebar ul li");


const sections = {
    "Dashboard": ["stats-section", "courses-section", "deadlines-section", "lectures-section"],
    "Courses": ["courses-section"],
    "Lectures": ["lectures-section"],
    "Progress": ["stats-section", "courses-section"],
    "Deadlines": ["deadlines-section"],
    "Profile": ["profile-section"]
};

menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
       
        menuItems.forEach(function (li) {
            li.classList.remove("active");
        });
        
        item.classList.add("active");

        let tabName = item.textContent.trim();

      
        const allSections = ["stats-section", "courses-section", "deadlines-section", "lectures-section", "profile-section"];
        allSections.forEach(secId => {
            let el = document.getElementById(secId);
            if (el) el.style.display = "none";
        });

        if (sections[tabName]) {
            sections[tabName].forEach(secId => {
                let el = document.getElementById(secId);
                if (el) el.style.display = "block"; 
            });
            
            let statsSec = document.getElementById("stats-section");
            if (statsSec && sections[tabName].includes("stats-section")) {
                statsSec.style.display = "flex";
            }
        }
    });
});


let saveProfileBtn = document.getElementById("saveProfileBtn");
if (saveProfileBtn) {
    saveProfileBtn.addEventListener("click", function () {
        let nameInput = document.getElementById("profileNameInput");
        let newName = nameInput ? nameInput.value : "";
        if (newName && newName.trim() !== "") {
            userName = newName.trim();
            
            if (document.getElementById("welcomeText")) {
                document.getElementById("welcomeText").innerHTML = "Welcome, " + userName;
            }
          
            if (document.getElementById("profileWelcomeText")) {
                document.getElementById("profileWelcomeText").innerHTML = "Welcome, " + userName;
            }
            
            
            let modalEl = document.getElementById('editProfileModal');
            let modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) {
                modal.hide();
            }
            
            alert("Profile updated successfully!");
            nameInput.value = "";
        }
    });
}
