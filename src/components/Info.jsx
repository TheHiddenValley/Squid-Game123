import React from "react";
import styled from "styled-components";
import { blue } from "../utils/colors";

export const Info = () => {
  return (
    <Section id="info" className="defaultMargin">
      <div className="square"></div>
      <div className="info">
        <div className="title">
          <ul>
            <h1>How To Buy</h1>
          </ul>
        </div>
        <div className="details">
          <p className="border-top">
          Visit phantom.app and follow the simple steps to create a new account with the Phantom app or browser extension.
          </p>
          <p className="border-top">
          Tap the BUY button in the app to purchase Solana, or deposit SOL to your Phantom wallet from the crypto exchange of your choice.
          </p>          <p className="border-top">
          Tap the SWAP icon in your Phantom wallet and paste the token address. Swap your SOL for tokens.
          </p>
          <p className="border-top">
          You're now holding some SID THE SQUID!
          </p>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  color: #c0c0c0;
  .square {
    height: 7rem;
    width: 7rem;
    border: 14px solid ${blue};
    margin: 5rem 0 0 5rem;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .title {
      ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        li {
          border-right: 1px solid #c0c0c0;
          padding-right: 2rem;
          &:last-of-type {
            border: none;
            padding: 0;
          }
        }
      }
    }
    .details {
      .border-top {
        border-top: 0.03rem solid #c0c0c0;
        padding: 2rem 0;
        display: flex;
        align-items: center;
      }
      p {
        width: 60%;
      }
      div {
        width: 60%;
        display: flex;
        ul {
          list-style-type: none;
        }
      }
    }
  }
  
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: block;
    margin: 0 5vw;
    .info {
      .title {
        ul {
          gap: 3vw;
          li {
            padding-right: 1rem;
            white-space: nowrap;
          }
        }
      }
      .details {
        p,div {
          width: 100%;
      }
      div {
        p {
          width: 50%;
        }
      }
    }
  }
`;