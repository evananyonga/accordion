const toggleButtons = require('./mask');

describe('toggleButtons', () => { // Entry point eg name of a feature or function.
    it('should call a class name, passes', () => { // This is jest. It could have it() or test()
        
        const toggleButtons = document.getElementsByClassName('toggleAccordion')
        expect(toggleButtons([])).toBe('toggleAccordion')
    });
});

