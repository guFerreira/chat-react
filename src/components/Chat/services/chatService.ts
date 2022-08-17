import axios from 'axios';

type MessageInput = {
    text:string
}

async function getMessages() {
    try {
      const { data, status } = await axios.get<any>(
        'http://localhost:8000/api/messages',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      console.log('response status is: ', status);
  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  
async function sendMessage(textInput:MessageInput) {
    try {
      const { data } = await axios.post<any>(
        'http://localhost:8000/api/messages/send',
        textInput,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );  
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

export default {
    sendMessage,
    getMessages
}