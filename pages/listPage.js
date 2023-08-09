const { I } = inject();

module.exports = {

    fields: {
        rowTitle: locate('div[data-automationid="DetailsRowCell"] a span')

    },

    chooseTitle(title) {
        I.waitForElement(this.fields.rowTitle.withText(title), 30);
        I.click(this.fields.rowTitle.withText(title));  
    },

    scrollToBottom(){
        I.waitForElement(this.fields.rowTitle, 30);
        I.scrollTo(this.fields.rowTitle.last(), 0, 1000);
    },
};

