const checkBoxesPage = require('../pageobjects/checkboxes.page');

describe('My if statement application', () => {
    it('should click checkbox1 if checkbox1 is unchecked', async () => {
        await checkBoxesPage.open();
        
        await expect(checkbox1).toBeExisting();
        
    });
});
