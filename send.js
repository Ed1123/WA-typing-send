/*
This code is intended to send a message inmediatly after some of your contacts starts typing in
Whatsapp Web.

Mainly it was intended to joke friends in groups when they don't answer other's questions. I'd type
something like: "Let me properly call [random_name]. Hey, [insert a beautiful nickname ^^]!". The message will
be sent just after he starts typing his response and sends it proving you know how to properly call him.
*/

contactName = 'Mishell';
isTypingText = contactName +  ' is typing…';

subTitleTextClassName = '_315-i _F7Vk'; // behind the contact name. The area where 'typing...' is displayed.

// Send button class name by the time of codding: '_3M-N-'
buttonClassName = '_3M-N-';

/*while the text is not 'contactName is typing…' just keep in the loop.
When the contact starts typing (the text is iqual) the loop ends and the code continues.*/
/*
while (isTypingText != document.getElementsByClassName(subTitleTextClassName)[0].title) {
	'Not yet'
};
*/
// The code above was change for a better implementation using setInterval
setInterval(function(){
		if (isTypingText == document.getElementsByClassName(subTitleTextClassName)[0].title) {
			// Pressing the send button
			document.getElementsByClassName('buttonClassName')[0].click();	
			console.log('Message sent.')
		}
        console.log('Not yet') // Looged each second

     },1000);