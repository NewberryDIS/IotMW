import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx } from '@emotion/core'

const FooterSection = styled.div`
    margin: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    & a {
        color: black;
        font-weight: 900;
        text-decoration: none;
        background-image: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75));
        background-position: 0% 105%;
        background-repeat: no-repeat;
        background-size: 0% 2px;
        transition: background-size .2s;
        
        &:hover {
            background-size: 100% 2px;
        }
    }
    padding: 15px 30px;
    border-radius: 6px; 
    &.left {
        flex: 1;
    }
    &.middle, &.right {
        font-size: 0.65rem;
    }
    &.middle {
        flex: 5;
    }
    &.right {
        flex: 2;
    }
`

// const FooterWrapper = (props) => <div css={css`display: flex; flex-direction: `} ></div>

const FooterWrapper = styled.div`
    background: white;
    -moz-box-shadow:    inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow:         inset 0 0 10px #000000;
    display: flex;
    flex-direction: row;
`
const Footer = (props) => {
    return (
        <FooterWrapper width={props.width}>
            <FooterSection className="left">
                <a href="https://publications.newberry.org/digital/indians-midwest/about">About this site</a>
                <br/>
                <a href="https://www.newberry.org/contact-librarian">
                    Contact Us
                </a>
            </FooterSection>
            <FooterSection className="middle">
                Except where otherwise noted, contextual content on this site is made available under a &nbsp;
                <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">
                    Creative Commons Public Domain license. &nbsp;
                </a>
                Digitized images and other media from the Newberry's collections are made available for any lawful purpose, commercial or non-commercial, without licensing or permission fees to the library, subject to the following terms and conditions:&nbsp;
                <a href="https://www.newberry.org/rights-and-reproductions">
                    Newberry Rights and Reproductions Policy. 
                </a>
            </FooterSection>
       
        </FooterWrapper>
    )
}
export default Footer