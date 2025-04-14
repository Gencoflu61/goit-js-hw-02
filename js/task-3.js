function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    if(lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')){
      console.log(true);
    }
    else{
       console.log(false);
    }
    return;
  }