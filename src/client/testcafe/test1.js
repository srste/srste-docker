import { Selector } from 'testcafe';

let typeMap = {
    text: {wrap: "srs-text-field", core: ".bx--text-input"},
    button: {wrap: "srs-button", core: ".bx--btn"},        
}

let widgetSelector = Selector((widgetId, type) => document.querySelector('page-renderer')
                            .shadowRoot.querySelector('page-designer-preview')
                            .shadowRoot.querySelector('widget-container[widgetid="' + widgetId + '"]')
                            .shadowRoot.querySelector(typeMap[type].wrap)
                            .shadowRoot.querySelector(typeMap[type].core), {timeout: 10000});

fixture `Vendor Signin`
    .page `http://localhost:8080/vsignin`;

test('editable OTP with valid mobile number', async t => {
    // await t.setPageLoadTimeout(40000);    

    await t.debug()
    let inputField = await widgetSelector("1d503270-d880-11ea-8a34-d1354a2afcab", "text");
    let loginField = await widgetSelector("ed321f80-d880-11ea-8a34-d1354a2afcab", "button");
    let otpField = await widgetSelector("ae512b30-d880-11ea-8a34-d1354a2afcab", "text");                                  
                                
                                
    await t
        .typeText(inputField, '2222233333')
        .click(loginField);
            
    // Use the assertion to check if the actual header text is equal to the expected one
    await t.expect(otpField.hasAttribute('disabled')).eql(false);

    let OTP = await t.eval(() => window.$qry.getRecords("Auth_OTP_pos", {where: {Mobile_Number: "2222233333"}}, ["OTP"]));

    console.log(OTP);
    
});