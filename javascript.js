function makePhoneCall() {
    
    var phoneNumber = '7200854421';
    window.location.href = 'tel:' + phoneNumber;
}
 
function openWhatsApp() {
    var phoneNumber = '7200854421'; 
    var message = 'Hello!'; 
    var whatsappURL = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappURL, '_blank');
}


function sendEmail() {
    var email = 'abinayanagaraj724@gmail.com'; 
    var subject = 'Work request'; 
    var body = 'Hello, I would like to in request your services.'; 
    var mailtoURL = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    window.location.href = mailtoURL;
}