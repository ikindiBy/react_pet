import React from "react";
import styled from "styled-components";

const StiledButton = styled.a`
  &.animated-button.victoria-one {
    border: 2px solid #c0ffee;
  }
  &.animated-button:link, &.animated-button:visited {
    position: relative;
    display: block;
    padding: 14px 15px;
    color: #f0f1c0;
    font-size:14px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    letter-spacing: .08em;
    border-radius: 0;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  &.animated-button:link:after, &.animated-button:visited:after {
    content: "";
    position: absolute;
    height: 0%;
    left: 50%;
    top: 50%;
    width: 150%;
    z-index: -1;
    -webkit-transition: all 0.75s ease 0s;
    -moz-transition: all 0.75s ease 0s;
    -o-transition: all 0.75s ease 0s;
    transition: all 0.75s ease 0s;
  }
  &.animated-button:link:hover, &.animated-button:visited:hover {
    color: #0f3027;
    text-shadow: none;
  }
  &.animated-button:link:hover:after, &.animated-button:visited:hover:after {
    height: 450%;
  }
  &.animated-button.victoria-one:after {
    background: #c0ffee;
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-25deg);
    transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  }
`;

const Button = props => (
    <StiledButton href="#" className="animated-button victoria-one" onClick={props.clickHandler}>Sign up</StiledButton>
);

export default Button;
