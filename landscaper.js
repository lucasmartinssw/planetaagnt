// Accordion Interatividade
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.style.display === 'block';
        closeAllAccordions();
        if (!isOpen) {
            content.style.display = 'block';
        }
    });
});

function closeAllAccordions() {
    document.querySelectorAll('.accordion-content').forEach(content => {
        content.style.display = 'none';
    });
}
