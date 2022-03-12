import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggeler = ({ toggle, onToggle }) => {
     return (
        <label className={`round switch ${toggle ? 'toggled': ''}`} onClick={onToggle} >
            {toggle ? (
                <FaSun className="themeIcon sun"/>
            ): (
                <FaMoon className="themeIcon moon"/>
            )}
        </label>
    )
}

export default ThemeToggeler
