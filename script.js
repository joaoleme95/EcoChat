
class ContactApp {
    constructor() {
        this.whatsappButton = document.getElementById('whatsappButton');

        this.initialize();
    }

    initialize() {
        this.whatsappButton.addEventListener('click', () => this.openWhatsApp());
    }

    openWhatsApp() {
        window.open('https://wa.me/5515991414626', '_blank');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new ContactApp();
});
