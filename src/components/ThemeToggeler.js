import React from 'react'
import { useState } from 'react'

const ThemeToggeler = ({ toggle, onToggle }) => {
     return (
        <label class="round switch" >
            <span class={`slider round ${toggle ? 'toggled': ''}`} onClick={onToggle}/>
        </label>
    )
}

export default ThemeToggeler
