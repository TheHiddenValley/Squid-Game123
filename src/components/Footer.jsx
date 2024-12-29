import React from "react";
import styled from "styled-components";
import { fontLightColor } from "../utils/colors";

export const Footer = () => {
  return (
    <Container className="defaultMargin">
        <ul className="links">
          <li>
            <a href="#info">How To Buy</a>
          </li>
          <li>
            <a href="#videos">Play the Game</a>
          </li>
          <li>
          <a href="https://www.dexscreener.com" target="_blank" rel="noopener noreferrer">
      DexScreener
    </a>
          </li>
          <li>
          <a href="https://x.com/sidthesquidsol" target="_blank" rel="noopener noreferrer">
      Twitter
    </a>
          </li>
          <li>
          <a href="https://t.me/sidthesquidSOL" target="_blank" rel="noopener noreferrer">
      Telegram
    </a>
          </li>
        </ul>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid ${fontLightColor};
  margin: 0 5rem;

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 18rem;
    row-gap: 2rem;
    list-style-type: none;
    li {
      a {
        text-transform: uppercase;
        color: ${fontLightColor};
        text-decoration: none;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }

  @media screen and (min-width: 80vw) and (max-width: 1080px) {
    margin: 0 5vw;
    ul {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  }
`;
