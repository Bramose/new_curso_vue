import { mount } from '@vue/test-utils';
import PokemonPicture from "@/modules/pokemon/components/PokemonPicture.vue"

describe('<PokemonPicture />', () => {
    test('should render the hidden image when showPokemon props is false', async() => {
        const wrapper = mount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })
        expect(wrapper.find('.fade-in').exists()).toBeFalsy();
    })

    test('should render the image when showPokemon prop is true', () => {
        const pokemonId = 1;
        const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
        const wrapper = mount(PokemonPicture, {
            props: {
                pokemonId,
                showPokemon: true
            }
        })
        expect(wrapper.find('.fade-in').exists()).toBeTruthy();
        expect(wrapper.find('img').attributes('src')).toBe(imgSrc);
    })

    test('should render the image when showPokemon prop is false Fernando', () => {
        const pokemonId = 25;
        const wrapper = mount(PokemonPicture, {
            props: {
                pokemonId,
                showPokemon: false
            }
        })
        const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
        const image = wrapper.find('img');
        const attributes = image.attributes();

        expect(attributes).toEqual(
            expect.objectContaining({
                class: 'brightness-0 h-[200px]',
                src: imgSrc
            }),
        );
    })
})