check element is visible & enabled
```
cy.get('#txt').should('be.visible').and('be.enabled')
```

check element is checked
```
cy.contains('Subject').and('be.checked') 
```

alias element as parent
```
cy.get('#txt').find('li').first().as('parent')
```

blur input

cy.get('#txt'). type('abc').blur()

//obtains children of element n
cy.get('n').children()

//removes input abc
cy.get('#txt'). type('abc').clear()

//clear abc cookie
cy.clearCookie('abc')

//clear all local storage
cy. clearLocalStorage ()

//click on element with id txt
cy.get('#txt').click()

//returns element in #txt having Tutor text
cy.get('#txt').contains('Tutor')

//double clicks element with id txt
cy.get('#txt').dblclick()

//pause to debug at start of command
cy.get('#txt').debug()

cy.document()

//iterate through individual li
cy.get('li').each(() => {
    
})

//obtain null instead of input
cy.contains('input').end()

//obtain third td in tr
cy.get('tr>td').eq(2)

//exec
//It runs a system command.
cy.exec('npm init')

//Find obtain td from tr
cy.get('tr').find('td')

//obtain first td in tr
cy.get('tr>td').first()

//obtain all td from tr in list
cy.get('tr>td')

cy.getCookie('abc')

//like clicking back button
cy.go('back')
//like clicking forward button
cy.go('forward')

cy.visit('https://www.tutorialspoint.com/index.htm')

//gives the following link in element l.
cy.get('l a:first').next()

//get parent of element with class h
cy.get('.h').parent()

//assert element is visible & enabled
cy.get('#txt').should('be.visible').and('be.enabled')

cy.wait(1000)

cy.title()

// viewport to 100px and 500px
cy.viewport(100, 500)

cy.log('Cypress logging ')

cy.reload()


Assertions

Length
It checks the count of elements obtained from the previously chained command
```
cy.get('#txt-fld').should('have.length',5)
```



value
It checks whether the web element has a certain value.
```
cy.get(' #txt-fld').should('have.value', 'Cypress')
```

class
It checks whether the web element possesses a certain class.
```
cy.get('#txt-fld'').should('have.class', 'txt')
```

contain
It checks whether the web element possesses a certain text.
```
cy.get('#txt-fld'').should('contain', 'Cypress')
```

visible
It checks whether the web element is visible.
```
cy.get('#txt-fld'').should('be.visible')
```
exist
It checks whether the web element is available in Document Object Model (DOM)
```
cy.get('#txt-fld'').should('not.exist');
```
css
It checks whether the web element possesses a certain css property.
```
cy.get('#txt-fld'').should('have.css', 'display', 'block');
```

Dropdown

The command used to choose the option Cypress is as follows −

cy.get('select').select('Cypress')
The command that chooses options Tutorialspoint and JavaScript is as follows −

cy.get('select').select(['Tutorialspoint', 'JavaScript'])
The command which can choose a value of a dropdown option along with options (to modify default characteristics) is as follows −

cy.get('select').select('option1', options )
The command that chooses the multiple values with options is as follows −

cy.get('select').select(['option1', 'option2'], options)


checkbox

The command used to click all the checkboxes is as follows −

cy.get('input[type="checkbox"]').check()
The command used to click a checkbox with id check is as follows −

cy.get('#chk').check()
The command used to click a checkbox with value Cypress is as follows −

cy.get('input[type="checkbox"]').check('Cypress')
The command used to click the checkboxes with values - Java and Python is as follows −

cy.get('input[type="checkbox"]').check(['Java','Python'])
The command used to click the checkbox having value Java with options is as follows −

cy.get('.chk').check('Java', options)
The command used to click the checkboxes with values – Java and Python with options is as follows:

cy.get('input[type="checkbox"]').check(['Java','Python'], options)
The command used to click the checkbox having class check with an option is as follows −

cy.get('.chk').check({force : true})
The command used to uncheck all the checkboxes is as follows −

cy.get('input[type="checkbox"]').uncheck()
The command used to uncheck a checkbox with id check is as follows −

cy.get('#chk').uncheck()
The command used to uncheck the checkbox with value Cypress is as follows −

cy.get('input[type="checkbox"]').uncheck('Cypress')
The command used to uncheck the checkboxes with values - Java and Python is as follows −

cy.get('input[type="checkbox"]').uncheck(['Java','Python'])
The command used to uncheck the checkbox having value Java with options is as follows −

cy.get('.chk').uncheck('Java', options)
The command used to uncheck the checkboxes with values – Java and Python with options is as follows −

cy.get('input[type="checkbox"]').uncheck(['Java','Python'], options)
The command used to uncheck the checkbox having class check with an option is as follows −

cy.get('.chk').uncheck({force : true)