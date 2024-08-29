import { expect, test, describe } from 'vitest'
import { sum, addArray } from '../../src/components/helpers/sum'

describe('add function', () => {
    test ('adds 1 + 2 to equals 3', () => {
        // Preparación
        const a = 1;
        const b = 4;
    
        // Estimulo
        const result = sum(a,b);
    
        // El comportamiento esperado
        expect(result).toBe(a + b);
        // if(sum(1,2) != 3) {
        //     throw new Error('La suma no es correcta');
        // }
    })
})

describe('addArray function', () => {
    test('Sumar todos los numeros del arreglo', () => {
        const numbers = [1, 2, 3 , 5];
    
        const result = addArray(numbers);
    
        expect(result).toBe(11);
    })
    
    test('should return 0 if the array is empty', () => {
        const numberArray = [];
    
        const result = addArray(numberArray);
    
        expect(result).toBe(0);
    })
})


