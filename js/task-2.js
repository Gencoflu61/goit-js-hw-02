function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        console.log(message);
        return ;
    } else {
        console.log(message.slice(0, maxLength) + "...");
        return ;
    }
}