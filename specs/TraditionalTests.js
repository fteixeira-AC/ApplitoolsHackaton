
describe('Test Scenarios not using Applitools Eyes', () => {

    before(() => {
        browser.url(browser.options.baseUrl)
        browser.maximizeWindow();
    });

    describe('Scenario 1 - Login Page UI Elements Test', () => {

        it('All the expected elements should exist on the page', () => {
            assert.isTrue($('.logo-w').isExisting());
            assert.isTrue($('.auth-header').isExisting());    
            assert.isTrue($('.os-icon-user-male-circle').isExisting());
            assert.isTrue($('/html/body/div/div/form/div[1]/label').isExisting());
            assert.isTrue($('#username').isExisting());
            assert.isTrue($('.os-icon-fingerprint').isExisting());
            assert.isTrue($('/html/body/div/div/form/div[2]/label').isExisting());
            assert.isTrue($('#password').isExisting());
            assert.isTrue($('#log-in').isExisting());
            assert.isTrue($('.form-check-label').isExisting());
            assert.isTrue($('.form-check-input').isExisting());
            assert.isTrue($("[src = 'img/social-icons/twitter.png']").isExisting());
            assert.isTrue($("[src = 'img/social-icons/facebook.png']").isExisting());
        })
    })
   


    describe('Scenario 2 - Data-Driven Test', () => {

        const userCredencialsDataDriven = [
            ['', '' ,'No Usermame and No Password'],
            ['fernando', '', 'No Password'],
            ['', '12345', 'No Username'],
            ['fernando', '12345', 'Username and Password filled']
        ];

         userCredencialsDataDriven.forEach(function (userCredencials) {
             it('Validating different combinations of credentials', () => {
                 $('#username').setValue(userCredencials[0])
                 $('#password').setValue(userCredencials[1])
                 $('#log-in').click()
                 if (userCredencials[0] != "" && userCredencials[1] != ""){
                     //successful login and Main Screen displayed
                    assert.isTrue($('.logo-element').isExisting())
                    assert.isTrue($('.logo-label').isExisting())
                    assert.isTrue($('#transactionsTable').isExisting())
                    assert.isTrue($('.element-balances').isExisting())
                 }
                 else if (userCredencials[0] === "" || userCredencials[1] === ""){
                     //An error happened and a message was displayed
                    assert.isTrue($('.alert-warning').isExisting())
                 }
             })
         })
    })

})