
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('customModal');
    var closeButton = document.getElementById('closeModal');
    var chatbotIcon = document.getElementById('chatbotIcon');

    chatbotIcon.addEventListener('click', function () {
        modal.style.display = 'block';
        chatbotIcon.style.display = 'none'; // Hide the chatbot icon
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        chatbotIcon.style.display = 'block'; // Show the chatbot icon
    });
});

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'sendMessageBtn') {
        sendMessage();
    }
});

// Handle the Enter key press event
document.getElementById('messageInput').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent the default action of the Enter key
        sendMessage();
    }
});

function sendMessage() {
    var messageValue = document.getElementById('messageInput').value.trim();
    if (messageValue !== "") {
        var layout = '<div class="message sender">' +
            '<div class="message-content">' +
            '<span style="text-align: left;">' + messageValue + '</span>' +
            '</div>' +
            '</div>';
        document.getElementById('chatbox').insertAdjacentHTML('beforeend', layout);
        document.getElementById('messageInput').value = '';
        scrollToBottom();
    }
}

function scrollToBottom() {
    var scrollableDiv = document.getElementById('chatbox');
    scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
}
