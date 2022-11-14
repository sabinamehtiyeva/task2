
class Message {
    constructor(authorName, getTime, txtMessage) {
        this.authorName = authorName;
        this.getTime = getTime;
        this.txtMessage = txtMessage;
    }
    toString(authorName, getTime, txtMessage) {
        console.log(authorName + getTime + txtMessage)
    }

}

const myMessage = new Message('John', 'Monday', 'Hello World')
 


class Messenger {
    constructor(authorName, getTime, txtMessage) {
        this.authorName = authorName;
        this.getTime = getTime;
        this.txtMessage = txtMessage;
    }
    show_history() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`  
    }
    send(author, text) {
        console.log( this.show_history() + " " +  author + " : " + text)
    }
}

let messenger = new Messenger()
messenger.send('Adil', 'first Message')
messenger.send('Meryem', 'second Message')
messenger.show_history()