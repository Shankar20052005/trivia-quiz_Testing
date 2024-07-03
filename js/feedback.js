document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedback-form');
    const toastElement = document.querySelector('.toast');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(feedbackForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        if (data.name && data.email && data.subject && data.message) {
            console.log(data);

            toastElement.textContent = 'Feedback submitted successfully!';
            toastElement.style.display = 'block';

            feedbackForm.reset();

            setTimeout(() => {
                toastElement.style.display = 'none';
            }, 3000);
        }
    });
});
