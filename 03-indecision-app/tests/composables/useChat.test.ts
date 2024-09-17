import { useChat } from "@/components/composables/useChat";

describe('useChat', () => {
    test('add message correctly when onMessage is called', async() => {
        const text = 'Hola mundo';
        const { messages, onNewMessage } = useChat();

        await onNewMessage(text);

        expect(messages.value.length).toBe(1);
        // expect(messages.value[0].itsMine).toBe(true);
        // expect(messages.value[0].message).toBe(text);
        expect(messages.value[0]).toEqual({
            id: expect.any(Number),
            itsMine: true,
            message: text,
        });
    })

    test('do nothing if text is empty', async() => {
        const text = '';
        const { messages, onNewMessage } = useChat();

        await onNewMessage(text);

        expect(messages.value.length).toBe(0);
    })

    test('gets her response correctly when message ends with "?"', async () => {
        const text = 'Quieres cafe?';

        const { messages, onNewMessage } = useChat();

        await onNewMessage(text);

        await new Promise( r => setTimeout(r, 2000));

        const [ myMessage, herMessage ] = messages.value;

        expect(messages.value.length).toBe(2);
        expect(herMessage).toEqual({
            id: expect.any(Number),
            image: expect.any(String),
            itsMine: false,
            message: expect.any(String),
        });

        expect(myMessage).toEqual({
            id: expect.any(Number),
            itsMine: true,
            message: text
        });
    })

    test('mock response - fetch api', async() => {

        const mockResponse = { answer: 'yes', image: 'example.git' };

        (window as any).fetch = vi.fn(async() => ({
            json: async() => mockResponse
        }));

        const text = 'Quieres cafe?';

        const { messages, onNewMessage } = useChat();

        await onNewMessage(text);

        await new Promise( r => setTimeout(r, 1600));

        const [ , herMessage ] = messages.value;

        expect(herMessage).toEqual({
            id: expect.any(Number),
            image: mockResponse.image,
            itsMine: false,
            message: mockResponse.answer,
        });
    })
})