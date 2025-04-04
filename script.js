document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        form.innerHTML = "<h2>Thank You for Signing Up!</h2><p>Stay tuned for the latest fashion updates.</p>";
        
        form.style.opacity = "0";
        setTimeout(() => {
            form.style.opacity = "1";
            form.style.transition = "opacity 1s ease-in-out";
        }, 100);
    });
});
