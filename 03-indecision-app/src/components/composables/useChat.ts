import { ref } from "vue";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import type { YesNoResponse } from "@/interfaces/yes-no.response";
import { sleep } from "../helpers/sleep";

export const useChat = () => {
    
    const messages = ref<ChatMessage[]>([]);

    const getHerResponse = async() => {
        const resp = await fetch('https://yesno.wtf/api');
        const data = (await resp.json()) as YesNoResponse;
        return data;
    }
  
      const onNewMessage = async(messageTxt:string) => {
        if(messageTxt.length === 0) return;
        messages.value.push({
          id: new Date().getTime(),
          message: messageTxt,
          itsMine: true
        });

        if(!messageTxt.endsWith('?')) return;

        await sleep(1.5);
        const { answer, image } = await getHerResponse();
        messages.value.push({
            id: new Date().getTime(),
            message: answer,
            image,
            itsMine: false
        });

      }
    
    
    
    return {
        // Properties
        messages,
        // Method
        onNewMessage
    }
}