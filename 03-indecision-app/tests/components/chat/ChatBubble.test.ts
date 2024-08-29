import { mount } from "@vue/test-utils";
import ChatBubble from "@/components/chat/ChatBubble.vue";

describe('<ChatBubble />', () => {
    test('render own message correctly', () => {
        const message = "Hola Mundo";
        const wrapper = mount(ChatBubble, {
            props: { message, itsMine: true }
        });
        expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
        expect(wrapper.find('.bg-blue-200').text()).toContain(message);
        expect(wrapper.find('.bg-blue-300').exists()).toBeFalsy();
    })

    test('renders received message correctly', () => {
        
    })
})