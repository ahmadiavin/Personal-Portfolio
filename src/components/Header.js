import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {GiMaterialsScience} from 'react-icons/gi'
const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <IconImg><GiMaterialsScience/></IconImg> 
        </div>
        <div className="content">
            <div className="inner">
                <h1>Ali Avin </h1>
                <p> Full Stack Web Developer </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header

const IconImg = styled.div`

font-size: 4rem;


`