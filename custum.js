// scroll section active link

let sections = document.getElementsByName('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[ href*='+ id +']').classList.add('active');
            })
        };
    })
}
const botToken = '7221637687:7221637687:AAEgvyPlsC8oeWKZdcWzs4IbY9EztygX4Mg';
const chatId = '5970023965';

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('text').value;

    const botToken = '7221637687:AAFc2kP7V7UlizVK-0ucC6G3ja_wcmhEp8I';
    const chatId = '5970023965';
    if(name !== '' || email !== '') {
        const text = `New message from ${name ? name : 'anonym'}:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text
                })
            });
    
            if (response.ok) {
                alert('Message sent!');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message.');
        }
    } else alert ("Sorry write something")
   
});
