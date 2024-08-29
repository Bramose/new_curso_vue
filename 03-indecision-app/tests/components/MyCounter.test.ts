import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter/>', () => {
    test('should match snapshop', () => {
        const wrapper = mount(MyCounter, {
            props: {
                value: 5,
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('renders the counter value correctly', () => {
        const value = 5;
        const wrapper = mount(MyCounter, {
            props: {
                value: value,
            }
        });

        const [ counterLabel ] = wrapper.findAll('h3');

        expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
        expect(wrapper.find('[data-testid="square-label"]').text()).toContain(`Square: ${value * value}`);
        expect(counterLabel.text()).toContain(`Counter: ${value}`);
    })

    test('increments the counter when +1 button is clicked', async() => {
        const value = 5;
        const wrapper = mount(MyCounter, {
            props: {
                value: value,
            }
        });

        const btnIncrement = wrapper.find('button');
        await btnIncrement.trigger('click');

        const valueIncrement = value + 1;

        const [ counterLabel ] = wrapper.findAll('h3');

        expect(wrapper.find('h3').text()).toContain(`Counter: ${valueIncrement}`);
        expect(wrapper.find('[data-testid="square-label"]').text()).toContain(`Square: ${valueIncrement * valueIncrement}`);
        expect(counterLabel.text()).toContain(`Counter: ${valueIncrement}`);
    })

    test('descremets the counter when -1 button is clicked twice', async() => {
        const value = 5;
        const wrapper = mount(MyCounter, {
            props: {
                value: value,
            }
        });

        const [,btnDescremet] = wrapper.findAll('button');
        await btnDescremet.trigger('click');
        await btnDescremet.trigger('click');

        const valueDescremet = value - 2;

        const [ counterLabel ] = wrapper.findAll('h3');

        expect(wrapper.find('h3').text()).toContain(`Counter: ${valueDescremet}`);
        expect(wrapper.find('[data-testid="square-label"]').text()).toContain(`Square: ${valueDescremet * valueDescremet}`);
        expect(counterLabel.text()).toContain(`Counter: ${valueDescremet}`);
    })
})