/// <reference types="cypress" />

import React from 'react'
import Select from '../../src/components/Select'
import { mount } from 'cypress-react-unit-test'
import { BrowserRouter as Router } from 'react-router-dom'

context('Select componente', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/Select/styles.css'
    const indexTeacherListCss = '/__root/src/pages/TeacherList/styles.css'

    it('deve ser renderizado com sucesso', () => {

        const label = 'Matéria'
        const name = 'Selecione uma opção'
        const option = [{ value: 'Artes', label: 'Artes' }]

        mount(
            <Router>                
                    <form id="search-teachers">
                        <Select
                            label= {label}
                            name={name}
                            options={option}
                        />
                    </form>                
            </Router>
            ,
            {
                stylesheets: [baseCss, indexCss, indexTeacherListCss]
            }
        )
        cy.get('.select-block label').as('label')
        cy.get('@label').then(($elemento) => {
            expect($elemento.css('font')).to.eq('500 14px Poppins')
        })
    })
})