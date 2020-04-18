describe('Walk around in VR ', () => {
    it('Go to an example app ', () => {
        cy.visit('https://walkaround-testautomation.glitch.me/')
    });

    it('Walk around', () => {

        cy.get('body > a-scene > div.a-enter-vr > button').click();
        cy.get('.a-canvas').click();
        cy.get('.a-canvas').trigger('mousedown');
    });

});