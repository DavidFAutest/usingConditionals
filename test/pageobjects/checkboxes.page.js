const Page = require('./page');

//Target
// Check box 1 
// http://the-internet.herokuapp.com/checkboxes

class checkBoxesPage extends Page {

    get checkbox1 () {
        return $('/html/body/div[2]/div/div/form/input[1]');
        
        // Xpath
        // //form/input[1]
        // /html/body/div[2]/div/div/form/input[1]
    }
    // target checked attribute
    get checked1 () {
        return $('');
    }


    open () {
        return super.open('checkboxes');
    }
}

module.exports = new checkBoxesPage();
