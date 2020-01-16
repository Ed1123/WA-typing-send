# WhatsappWeb-send-when-typing
Send a message when a contact starts typing on Whastapp Web using Chrome Dev Tools and JavaScript.

## How to use it
Modify the contact name and the message (for use inside Whatsapp groups).
Copy all the code except for the last line into the consolo of Chrome DevTools. The code will run and log each second.
To stop the code execute the last line of the code on the console. (clearInterval(interval);)

Note: The code works even if the Whatsapp Web tab is minimized.
  
## How it works
It looks for the text under the contact/group name and check if it says 'is typing…'. It uses the ClassName on that box that was extracted using DevTools and looking into the DOM.
The textBox and sendButton were found using the query (thanks to Renan Coelho on stackoverflow). The code types into the textBox, activate it and click on the send button. As simple as that. I'm a newbie, but I did it by myself. ^^
