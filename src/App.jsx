import { useState } from 'react'

function App() {
  const [ color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>Purple</button>
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "orange"}} onClick={() => setColor("orange")}>Orange</button>
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}>Olive</button>
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</button>
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "teal"}} onClick={() => setColor("teal")}>Teal</button>
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "brown"}} onClick={() => setColor("brown")}>Brown</button>
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "gray"}} onClick={() => setColor("gray")}>Gray</button>
        <button className="w-12 h-12 m-2 rounded-2xl" style={{backgroundColor: "black", color: "white"}} onClick={() => setColor("black")}>Black</button>
      </div>
    </div>
  )
}

export default App
