import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Textfit } from 'react-textfit';
import { toBlob } from 'html-to-image';
import { saveAs } from 'file-saver';

export default function Home() {
  const [name, setName] = useState("")
  const [bold, setBold] = useState(false)
  const [i, setI] = useState(false)
  const [font, setFont] = useState('Comic Neue')
  const stickerRef = useRef()

  const NameDiv = ({ x, y, h, w }) => (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        marginTop: 20,
        // border: "1px solid black",
        width: w,
      }}>
      <Textfit
        mode="multi"
        // forceSingleModeWidth={false}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          lineHeight: "110%",
          textAlign: "center",
          height: h,
          padding: "3px 10px 3px 7px",
          fontWeight: bold ? "bold" : "normal",
          fontFamily: font
        }}
      >
        {name}
      </Textfit>
    </div>
  )

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleDownload = () => {
    console.log(stickerRef)
    toBlob(stickerRef.current)
      .then((blob) => {
        saveAs(blob, 'my-node.png')
      })
  }

  const A1 = 73
  const w1 = 100
  const h1 = 66

  const w2 = 86
  const h2 = 50 

  const fonts = [
    "Dancing Script",
    "Comic Neue",
    'Secular One'
  ]
  return (
    <div style={{ padding: 30 }}>
      <Head>
        <title>Showme Stickers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div>
          <textarea
            type="text"
            value={name}
            onChange={(e) => { handleChange(e) }}
            placeholder="Enter your name"
          // style={{marginBottom: 40, width: 300}}
          />

          <br />
          {/* <button onClick={()=>{setBold(!bold)}} style={{marginRight: 10}}>bold</button> */}
          <div>choose a font:</div>
          {fonts.map((item, i) => {
            return (
              <div key={i} onClick={() => { setFont(item) }}
                style={{ marginRight: 10, fontFamily: item, fontSize: 30, color: "grey", cursor: "pointer" }}>
                {item}
              </div>
            )
          })}
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute" }}>
            <Sticker>
              <img src="/amongUs.jpg" style={{ position: "absolute", width: 500 }} />
            </Sticker>
          </div>
          <Sticker ref={stickerRef}>
            <NameDiv x={60} y={-13} h={h1} w={w1} />
            <NameDiv x={60} y={60} h={h1} w={w1} />
            <NameDiv x={60} y={133} h={h1} w={w1} />
            <NameDiv x={60} y={206} h={h1} w={w1} />
            <NameDiv x={60} y={278} h={h1} w={w1} />

            <NameDiv x={226} y={-13} h={h1} w={w1} />
            <NameDiv x={226} y={60} h={h1} w={w1} />
            <NameDiv x={226} y={133} h={h1} w={w1} />
            <NameDiv x={226} y={206} h={h1} w={w1} />
            <NameDiv x={226} y={278} h={h1} w={w1} />

            <NameDiv x={392} y={-13} h={h1} w={w1} />
            <NameDiv x={392} y={60} h={h1} w={w1} />
            <NameDiv x={392} y={133} h={h1} w={w1} />
            <NameDiv x={392} y={206} h={h1} w={w1} />
            <NameDiv x={392} y={278} h={h1} w={w1} />

            <NameDiv x={43} y={350} h={h2} w={w2} />
            <NameDiv x={166} y={350} h={h2} w={w2} />
            <NameDiv x={292} y={350} h={h2} w={w2} />
            <NameDiv x={414} y={350} h={h2} w={w2} />

            <NameDiv x={43} y={408} h={h2} w={w2} />
            <NameDiv x={166} y={408} h={h2} w={w2} />
            <NameDiv x={292} y={408} h={h2} w={w2} />
            <NameDiv x={414} y={408} h={h2} w={w2} />

            <NameDiv x={43} y={466} h={h2} w={w2} />
            <NameDiv x={166} y={466} h={h2} w={w2} />
            <NameDiv x={292} y={466} h={h2} w={w2} />
            <NameDiv x={414} y={466} h={h2} w={w2} />

            <NameDiv x={43} y={524} h={h2} w={w2} />
            <NameDiv x={166} y={524} h={h2} w={w2} />
            <NameDiv x={292} y={524} h={h2} w={w2} />
            <NameDiv x={414} y={524} h={h2} w={w2} />

            <NameDiv x={43} y={582} h={h2} w={w2} />
            <NameDiv x={166} y={582} h={h2} w={w2} />
            <NameDiv x={292} y={582} h={h2} w={w2} />
            <NameDiv x={414} y={582} h={h2} w={w2} />

            <NameDiv x={43} y={640} h={h2} w={w2} />
            <NameDiv x={166} y={640} h={h2} w={w2} />
            <NameDiv x={292} y={640} h={h2} w={w2} />
            <NameDiv x={414} y={640} h={h2} w={w2} />

          </Sticker>
        </div>
      </Container>
      <button onClick={handleDownload}>download image</button>
    </div>
  )
}

const Container = styled.div`
      display: flex;
      flex-flow: row nowrap;
      `;
const Sticker = styled.div`
      position: relative;
      /* flex:1; */
      width: 500px;
      height: 718px;
      white-space: pre-line;
      /* background-color: yellow; */
      `;
const Names = styled.div`
      position: absolute;
      top: 0;
      `;

