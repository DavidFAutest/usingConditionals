const Page = require('./page');

//Target
//

class checkBoxesPage extends Page {

    get checkbox1 () {
        return $('');
        // //form/input[1]
        // /html/body/div[2]/div/div/form/input[1]
    }


    open () {
        return super.open('checkboxes');
    }
}

module.exports = new checkBoxesPage();
