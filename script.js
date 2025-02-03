
        function toggleFaq(element) {
            const answer = element.nextElementSibling;
            const isVisible = answer.style.display === "block";

            // Hide all answers
            document.querySelectorAll(".faq-answer").forEach((el) => {
                el.style.display = "none";
            });

            // Reset all + signs
            document.querySelectorAll(".faq-question span:last-child").forEach((el) => {
                el.textContent = "+";
            });

            // Toggle the clicked one
            if (!isVisible) {
                answer.style.display = "block";
                element.querySelector("span:last-child").textContent = "-";
            }
        }
        function toggleMenu() {
            const menu = document.querySelector('.navbar-menu');
            menu.classList.toggle('active');
        }

        function toggleFaq(element) {
            const answer = element.nextElementSibling;
            const isVisible = answer.style.display === "block";

            document.querySelectorAll('.faq-answer').forEach(el => el.style.display = 'none');
            document.querySelectorAll('.faq-question span:last-child').forEach(el => el.textContent = '+');

            if (!isVisible) {
                answer.style.display = 'block';
                element.querySelector('span:last-child').textContent = '-';
            }
        }