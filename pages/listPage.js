const { I } = inject();

module.exports = {

    fields: {
        rowTitle: locate('div[data-automationid="DetailsRowCell"] a span')

    },

    chooseTitle(title) {
        I.waitForElement(this.fields.rowTitle.withText(title), 20);
        I.click(this.fields.rowTitle.withText(title)),
        I.waitForNavigation();

    },

}

