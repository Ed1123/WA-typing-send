/*
This code is intended to send a message inmediatly after some of your contacts starts typing in
Whatsapp Web.

Mainly it was intended to joke friends in groups when they don't answer other's questions. I'd type
something like: "Let me properly call [random_name]. Hey, [insert a beautiful nickname ^^]!". The message will
be sent just after he starts typing his response and sends it proving you know how to properly call him.
*/


// Function that sends a message. It just type and click on send.
function sendMessage (message) {
	// Textbox query
	textBoxQuery = '#main > footer > div._2i7Ej._14Mgc.copyable-area > div._13mgZ > div > div._3u328.copyable-text.selectable-text';

	// Send button query name by the time of codding
	buttonQuery = '#main > footer > div._2i7Ej._14Mgc.copyable-area > div:nth-child(3) > button';

	// textBox Object for making the code more readable
	textBox = document.querySelector(textBoxQuery);

	// Typing the text
	textBox.textContent = message;

	
	var event = new InputEvent('input', {
		bubbles: true
	}); // I don't know yet what is this for, but is needed for activating the textbox.
	
	// Activating the textBox to make the send button visible
	textBox.dispatchEvent(event);

	// Pressing the send button
	document.querySelector(buttonQuery).click();
}

message = "You're typing"; // A nice message to autosend. Modify it.

contactName = 'Mishell'; // The contact name. Modify it.

isTypingText = contactName +  ' is typing…';

subTitleTextClassName = '_315-i _F7Vk'; // behind the contact name. The area where 'typing...' is displayed.



/*while the text is not 'contactName is typing…' just keep in the loop.
When the contact starts typing (the text is iqual) the loop ends and the code continues.*/
/*
while (isTypingText != document.getElementsByClassName(subTitleTextClassName)[0].title) {
	'Not yet'
};
*/
// The code above was change for a better implementation using setInterval
interval = setInterval(function(){
		if (isTypingText == document.getElementsByClassName(subTitleTextClassName)[0].title || 'is typing…' == document.getElementsByClassName(subTitleTextClassName)[0].title) {
			
			sendMessage(message);
			console.log('Message sent.');
		}
        console.log('Not yet'); // Looged each second

     },1000);

// To stop the code update the page or use the following command:
clearInterval(interval);