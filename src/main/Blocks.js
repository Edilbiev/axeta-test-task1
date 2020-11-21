import React from "react";
import CodeSamples from "./CodeSamples";
import SplittedBlock from "./SplittedBlock";
import QuoteBlock from "./QuoteBlock";
import Block from "./Block";
import BlockTitle from "./BlockTitle";
import Subtitle from "./Subtitle";

function Blocks() {
  const quotes = [
    {
      id: 1,
      title: "The most amazing …",
      quote:
        "… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua et dol ut labore et dolore ",
      author: "-Martin",
    },
    {
      id: 2,
      title: "In clients I look for …",
      quote:
        "… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua et dol ut labore et dolore ",
      author: "-Martin",
    },
    {
      id: 3,
      title: "",
      quote: "",
      author: "",
    },
    {
      id: 4,
      title: "Note",
      quote:
        "… Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua et dol ut labore et dolore ",
      author: "-Martin",
    },
  ];

  return (
    <main>
      <div className="row">
        <Block>
          <BlockTitle>
            Portfolio
            <Subtitle>PHP, Ruby, Javascript</Subtitle>
          </BlockTitle>
          <ul>
            <li><b>NavalPlan</b>, PHP, Ruby</li>
            <li><b>MyTime</b>, Javascript</li>
            <li><b>Formidable</b>, PHP, Ruby</li>
            <li><b>MyTime</b>, Javascript</li>
            <li><b>Monsoon</b>, ActionScript</li>
          </ul>
        </Block>
        <Block>
          <BlockTitle>Experience</BlockTitle>
          <ul>
            <li><b>PHP</b>, 6 years</li>
            <li><b>Ruby</b>, 7 years</li>
            <li><b>Javascript</b>, 4 years</li>
            <li><b>ActionScript</b>, 3 years</li>
          </ul>
        </Block>
        <Block>
          <CodeSamples>
            <BlockTitle>Sample code and algorithms</BlockTitle>
          </CodeSamples>
        </Block>
        <Block>
          <SplittedBlock />
        </Block>
      </div>
      <div className="row">
        {quotes.map((item) => {
          return (
            <Block>
              <BlockTitle>{item.title}</BlockTitle>
              {item.quote && (
                <QuoteBlock key={item.id} author={item.author}>
                  {item.quote}
                </QuoteBlock>
              )}
            </Block>
          );
        })}
      </div>
    </main>
  );
}

export default Blocks;
