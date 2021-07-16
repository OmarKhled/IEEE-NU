import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useState } from 'react'

const ThemeToggeler = ({ toggle, onToggle }) => {
     return (
        <label class={`round switch ${toggle ? 'toggled': ''}`} onClick={onToggle} >
            {toggle ? (
                <FaSun className="themeIcon sun"/>
            ): (
                <FaMoon className="themeIcon moon"/>
            )}
        </label>
    )
}

export default ThemeToggeler
