
class HomePage
{
    getLoadingIcon()
    {
        return cy.get('._3BphHWM-bzYSbKeOp3CX-U', {timeout: 40000})
    }

    getToolTipMark()
    {
        return cy.get('._1J1JEmLLWFBsKbQj2M5hHp > span', {timeout: 30000})

    }

    getToolTipMarkClose()
    {
    return  cy.get('._1J1JEmLLWFBsKbQj2M5hHp > span').nextUntil('#qa-GENERIC_LIGHTBOX_CLOSE > [fill="none"] > g > path')
    }

    getNewNoteButton()
    {
        return cy.get('.IGGdg9ng849gldLLksSyS')
    }

    getSignOutDropDown()
    {
        return cy.get('svg._1yX_AgzXv-DFC4ljGOVNNq')
    }

    getSignOutButton()
    {
        return cy.get('#qa-ACCOUNT_DROPDOWN_LOGOUT')
    }

    getCurrentUrl()
    {
        return cy.location('href')
    }

    getHeader()
    {
        return  cy.get('h1').invoke('text')
    }

    getNotesFrame()
    {
        return  cy.get('#qa-COMMON_EDITOR_IFRAME._3KRv01IUb9w2qf8klRfUWq')
    }

    getNotesTitle()
    {
        return  '._1G01v textarea'
    }

    getNotesBody()
    {
        return  '#en-note'
    }

    getLatestCreatedNotesTimeStamp()
    {
        return  cy.get('.ReactVirtualized__Grid__innerScrollContainer article:nth-child(1) ._27iliP-pdJnWR1-KBvLH9b ._6U1vdPApvTHCdoySxFGwS div').invoke('text')
    }

    getLatestCreatedNotesTitle()
    {
        return  cy.get('.ReactVirtualized__Grid__innerScrollContainer article:nth-child(1) ._2AcvBU9DDua5na1DLDVI2M span span').invoke('text')
    }
    
}

export default HomePage;
