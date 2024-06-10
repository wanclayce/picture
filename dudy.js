document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo');

    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            // Remove active class from all photos
            photos.forEach(p => p.classList.remove('active'));

            // Add active class to the clicked photo
            this.classList.add('active');
        });
    });
});
