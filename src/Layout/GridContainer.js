import styled from "styled-components";
import backgroundImg from '../assets/images/pattern-background-desktop.svg';
import Hero from '../assets/images/illustration-hero.svg';
import MusicIcon from '../assets/images/icon-music.svg'

export const Background = styled.div`
    height: 100%;
    background-color: hsl(225, 100%, 94%);
    background-repeat: no-repeat;
    background-image: url(${backgroundImg});

`


export const GridContainer = styled.div`
display: grid;
align-items: center;

grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, .4fr);
font-family: 'Red Hat Display', sans-serif;
`

export const CardContainer = styled.div`
    grid-column: 2;
    grid-row: 2;

    height: 90vh;
    margin: auto;
    align-items: stretch;
    box-shadow: 0 5px 11px rgba(0, 0, 0, 0.3)  ; 
	-webkit-box-shadow: 0 5px 11px rgba(0, 0, 0, 0.3)  ; 
	-moz-box-shadow: 0 5px 11px rgba(0, 0, 0, 0.3)  ; 

    background: white; 
	border: solid #BDBDBD 1px; 
	border-top-left-radius: 11px; -webkit-border-top-left-radius: 11px; -moz-border-top-left-radius: 11px; 
	border-top-right-radius: 11px; -webkit-border-top-right-radius: 11px; -moz-border-top-right-radius: 11px; 
	border-bottom-left-radius: 11px; -webkit-border-bottom-left-radius: 11px; -moz-border-bottom-left-radius: 11px; 
	border-bottom-right-radius: 12px; -webkit-border-bottom-right-radius: 12px; -moz-border-bottom-right-radius: 12px;
     
`

export const HeroImg = styled.div`
    height: 30%;
    margin-bottom: 3em;
    background-image: url(${Hero});

    border-top-left-radius: 5px; -webkit-border-top-left-radius: 5px; -moz-border-top-left-radius: 5px; 
	border-top-right-radius: 6px; -webkit-border-top-right-radius: 6px; -moz-border-top-right-radius: 6px; 
`

export const OrderStyle = styled.h1`
    color: hsl(223, 47%, 23%);
    font-weight: 900;
`

export const Description = styled.h5`
    margin: auto;
    margin: 0 4em 1em 4em;
    padding: 0 1em 0 1em;
    
    font-size: 16px;
    text-align: center;
    color: hsl(224, 23%, 55%);
    font-family: 'Red Hat Display', sans-serif;
`

export const AnnualPlan = styled.div`
    display: grid;
    grid-template-columns: 90px 1fr 150px;

    height: 13%;
    margin: 0 3em 0 3em;
    background-color: hsl(225, 100%, 98%);

    border-top-left-radius: 15px; -webkit-border-top-left-radius: 15px; -moz-border-top-left-radius: 15px; 
	border-top-right-radius: 15px; -webkit-border-top-right-radius: 15px; -moz-border-top-right-radius: 15px; 
	border-bottom-left-radius: 15px; -webkit-border-bottom-left-radius: 15px; -moz-border-bottom-left-radius: 15px; 
	border-bottom-right-radius: 15px; -webkit-border-bottom-right-radius: 15px; -moz-border-bottom-right-radius: 15px; 
`

export const MusicImage = styled.div`
    height: 100%;
    justify-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${MusicIcon});
`

export const ChangeLinkStyle = styled.div`
    margin: auto;
    grid-column: 3;
`
export const AnnualPlanStyle = styled.div`
    margin-bottom: -1em;
`

export const H4Tag = styled.h4`
    color: hsl(223, 47%, 23%);
    font-weight: 700;
`
export const H5Tag = styled.h4`
    color: hsl(224, 23%, 55%);
    top: -1.5em;
    position: relative;
`
export const Button = styled.div`
    display: flex;

    height: 7%;
    margin: 2em 3em 1em 3em;
    background-color: hsl(245, 75%, 52%);

    color: white;
    font-weight: 700;
    text-align: center;
    align-items: center;
    justify-content: center;

    box-shadow: -1px 23px 29px hsl(225, 100%, 94%); 
	-webkit-box-shadow: -1px 23px 29px hsl(225, 100%, 94%); 
	-moz-box-shadow: -1px 23px 29px hsl(225, 100%, 94%); 

    border-top-left-radius: 10px; -webkit-border-top-left-radius: 10px; -moz-border-top-left-radius: 10px; 
	border-top-right-radius: 10px; -webkit-border-top-right-radius: 10px; -moz-border-top-right-radius: 10px; 
	border-bottom-left-radius: 10px; -webkit-border-bottom-left-radius: 10px; -moz-border-bottom-left-radius: 10px; 
	border-bottom-right-radius: 10px; -webkit-border-bottom-right-radius: 10px; -moz-border-bottom-right-radius: 10px;  
`

export const CancelContainer = styled.div`
    height: 1em;
    width: 100%;
    margin-top: 3em;
    color: hsl(224, 23%, 55%);
`


