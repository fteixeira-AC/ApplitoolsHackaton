
describe('Test Scenarios not using Applitools Eyes', () => {

    beforeEach(() => {
        browser.url(browser.options.baseUrl)
        browser.maximizeWindow();
    });

    describe('Scenario 1 - Login Page UI Elements Test - No Applitools Eyes', () => {
        it('All the expected elements should exist on the page', () => {
            assert.isTrue($('.logo-w').isExisting());
            assert.isTrue($('.auth-header').isExisting());    
            assert.equal($('.auth-header').getText(),'Login Form');
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
            assert.isTrue($("[src = 'img/social-icons/linkedin.png']").isExisting());
        })
    })

    describe('Scenario 2 - Data-Driven Test - No Applitools Eyes', () => {
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
                 /*
                 Note: In the third combination, of 'No Username', the message is displayed in a wrong position.
                A visual regression testing would fit much better to catch this bug
                 */
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

    describe('Scenario 3 - Table Sort Test - No Applitools Eyes', () => {
        it('Verifying Amount Column sort', () => {
            $('#username').setValue('admin')
            $('#password').setValue('admin')
            $('#log-in').click()
            $('#amount').click()
           
            // Tends to be a very flaky test, due to possible changes on the values
            assert.equal( $('#transactionsTable > tbody > tr:nth-child(1) > td.text-right > span').getText(), '- 320.00 USD')
            assert.equal( $('#transactionsTable > tbody > tr:nth-child(2) > td.text-right > span').getText(), '- 244.00 USD')
            assert.equal( $('#transactionsTable > tbody > tr:nth-child(3) > td.text-right > span').getText(), '+ 17.99 USD')
            assert.equal( $('#transactionsTable > tbody > tr:nth-child(4) > td.text-right > span').getText(), '+ 340.00 USD')
            assert.equal( $('#transactionsTable > tbody > tr:nth-child(5) > td.text-right > span').getText(), '+ 952.23 USD')
            assert.equal( $('#transactionsTable > tbody > tr:nth-child(6) > td.text-right > span').getText(), '+ 1,250.00 USD')
        })
    })

    describe('Scenario 4 - Canvas Chart Test - No Applitools Eyes', () => {
        it('Verifying the different values in 2017 and 2018', () => {
            $('#username').setValue('admin')
            $('#password').setValue('admin')
            $('#log-in').click()
            $('#showExpensesChart').click()       
            /* NOTE: Not able to create to verify the different bars on the Canvas. 
            Using the 'Inspect element', it is not possible to verify the inner elements, like the bars. */
        })
    })

    describe('Scenario 5 - Dynamic Content Test - No Applitools Eyes', () => {
        browser.url(browser.options.baseUrl + '?showAd=true')
        it('Verifying the Ads gifs', () => {
            $('#username').setValue('admin')
            $('#password').setValue('admin')
            $('#log-in').click()
            assert.isTrue($('#flashSale > img[src="img/flashSale.gif"]').isExisting())
            assert.isTrue($('#flashSale2 > img[src="img/flashSale2.gif"]').isExisting())   
            /* When executing in version 2, those asserts will show that the expected gifs are not 
            being shown. The responsible tester will have to investigate further what happened and 
            notice that one ofthe gifs is not being displayed and the other one has changed */
        })
    })

})