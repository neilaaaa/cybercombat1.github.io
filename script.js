document.addEventListener('DOMContentLoaded', function() {
    const toggleNav = document.querySelector('.toggle-nav');
    const sidebar = document.getElementById('sidebar');

    console.log(toggleNav); // Check if toggleNav is correctly selected
    console.log(sidebar); // Check if sidebar is correctly selected

    toggleNav.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        console.log('Toggle clicked'); // Check if click event is firing
    });
});
