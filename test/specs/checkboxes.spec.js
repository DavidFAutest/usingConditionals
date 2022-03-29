const checkBoxesPage = require('../pageobjects/checkboxes.page');

describe('My if statement application', () => {
    it('should click checkbox1 if checkbox1 is unchecked', async () => {
        await checkBoxesPage.open();
        
        // target test
        //await expect(checkBoxesPage.checkbox1).toBeExisting();

        //notes
        // await checkBoxesPage.checkbox1.getAttribute('checked')

        if (await checkBoxesPage.checkbox1.getAttribute('checked')) {
            //  this block of code will be executed if the condition is true
        } else {
            //  this block of code will be executed if the condition is false
        }
    });
});
