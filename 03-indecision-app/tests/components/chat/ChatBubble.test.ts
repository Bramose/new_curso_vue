import { mount } from '@vue/test-utils';
import ChatBubble from '@/components/chat/ChatBubble.vue';

describe('<ChatBubble />', () => {
  test('render own message correctly', () => {
    const message = 'Hola mundo,¿Como estas?';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: true },
    });
    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('renders received message correctly', () => {
    const message = 'Estoy grande y lluvioso, desde silao.';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false },
    });
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    expect(wrapper.find('img').exists()).toBeFalsy();
  });
  test('renders received message with image correctly', () => {
    const message = 'Estoy grande y lluvioso, desde silao.';
    const image = 'example.jpg';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false, image },
    });
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });
});
