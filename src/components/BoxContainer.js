import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import lodash from "lodash"
import "../css/box-container.css"

function BoxContainer() {
  const [bill, setBill] = useState("")
  const [people, setPeople] = useState(1)
  const [tipAmount, setTipAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [percent, setPercent] = useState("")
  const [reset, setReset] = useState(false)
  const [style, setStyle] = useState({ backgroundColor: "#0b6c69" })
  const [clicked, setClicked] = useState([
    { percent: 5, checked: false },
    { percent: 10, checked: false },
    { percent: 15, checked: false },
    { percent: 25, checked: false },
    { percent: 50, checked: false }
  ])
  const [state, setState] = useState([
    { field: "bill", clicked: false },
    { field: "custom", clicked: false },
    { field: "people", clicked: false }
  ])
  const [zero, setZero] = useState(false)
  const [customPercentage, setCusomPercentage] = useState("")

  function handleBillChange(e) {
    const value = e.target.value
    setBill(Number(value))
    setStyle({ backgroundColor: "#26c0ab" })
  }
  function handleClick(percent) {
    if (people > 0) {
      setReset(true)
      setPercent(Number(percent))
      let tip = (bill * percent) / 100
      setTipAmount(Number((tip / people).toFixed(2)))
      setStyle({ backgroundColor: "#26c0ab" })
    }
  }
  function handlePeopleChange(e) {
    const value1 = e.target.value
    const value = Number(value1)
    console.log(value)
    if (value === 0) {
      console.log("first")
      setZero(true)
      setPeople(0)
    }
    if (value > 0) {
      console.log("second")
      setZero(false)
      setPeople(value)
      setStyle({ backgroundColor: "#26c0ab" })
    }
  }
  function handleCustomChange(e) {
    setReset(true)
    const value = e.target.value
    setPercent(Number(value))
    setCusomPercentage(Number(value))
    setStyle({ backgroundColor: "#26c0ab" })
  }
  function handleReset(e) {
    e.preventDefault()
    setBill("")
    setPeople(1)
    setTipAmount(0)
    setTotalAmount(0)
    setPercent(0)
    setReset(false)
    setStyle({ backgroundColor: "#0b6c69" })
    setClicked([
      { percent: 5, checked: false },
      { percent: 10, checked: false },
      { percent: 15, checked: false },
      { percent: 25, checked: false },
      { percent: 50, checked: false }
    ])
    setZero(false)
  }

  function handleMouseEnter(e) {
    reset === true && setStyle({ backgroundColor: "rgb(172, 229, 236)" })
  }
  function handleMouseLeave() {
    reset === true && setStyle({ backgroundColor: "#26c0ab" })
  }

  useEffect(() => {
    setTotalAmount((bill / people + tipAmount).toFixed(2))
  }, [tipAmount])

  useEffect(() => {
    if (people > 0) {
      let tip = (bill * percent) / 100
      setTipAmount(Number((tip / people).toFixed(2)))

      setTotalAmount((bill / people + tipAmount).toFixed(2))
    }
  }, [percent, people, bill])

  return (
    <div className="container">
      {/* left side of the part */}
      <div className="left-side">
        {/* bill part */}
        <div className="bill">
          <div className="label">Bill</div>
          <div
            className="bill-input-field"
            style={{
              border: state[0].clicked === true ? "1px solid black" : "0"
            }}
            onClick={() => {
              setState((prev) => {
                return prev.map((element) => {
                  if (element.field == "bill") {
                    return { field: "bill", clicked: true }
                  }
                  return { ...element, clicked: false }
                })
              })
            }}
          >
            <div className="dollar-sign icon">$</div>
            <input
              type="Number"
              onChange={handleBillChange}
              name="bill"
              value={bill}
              placeholder="0"
            ></input>
          </div>
        </div>
        <div className="select-tip">
          <div className="label">Select Tip%</div>
          <div className="first-line-of-button">
            <button
              className="btn"
              style={{
                backgroundColor:
                  clicked[0].checked === true ? "#26c0ab" : "#00494d"
              }}
              onClick={() => {
                handleClick(5)
                setClicked((prev) => {
                  return prev.map((element, key) => {
                    if (element.percent === 5) {
                      return { percent: 5, checked: true }
                    }
                    return { percent: element.percent, checked: false }
                  })
                })
              }}
            >
              5%
            </button>
            <button
              className="btn"
              style={{
                backgroundColor:
                  clicked[1].checked === true ? "#26c0ab" : "#00494d"
              }}
              onClick={() => {
                handleClick(10)
                setClicked((prev) => {
                  return prev.map((element, key) => {
                    if (element.percent === 10) {
                      return { percent: 10, checked: true }
                    }
                    return { percent: element.percent, checked: false }
                  })
                })
              }}
            >
              10%
            </button>
            <button
              className="btn"
              style={{
                backgroundColor:
                  clicked[2].checked === true ? "#26c0ab" : "#00494d"
              }}
              onClick={() => {
                handleClick(15)
                setClicked((prev) => {
                  return prev.map((element, key) => {
                    if (element.percent === 15) {
                      return { percent: 15, checked: true }
                    }
                    return { percent: element.percent, checked: false }
                  })
                })
              }}
            >
              15%
            </button>
          </div>
          <div className="second-line-of-button">
            <button
              className="btn"
              style={{
                backgroundColor:
                  clicked[3].checked === true ? "#26c0ab" : "#00494d"
              }}
              onClick={() => {
                handleClick(25)
                setClicked((prev) => {
                  return prev.map((element, key) => {
                    if (element.percent === 25) {
                      return { percent: 25, checked: true }
                    }
                    return { percent: element.percent, checked: false }
                  })
                })
              }}
            >
              25%
            </button>
            <button
              className="btn"
              style={{
                backgroundColor:
                  clicked[4].checked === true ? "#26c0ab" : "#00494d"
              }}
              onClick={() => {
                handleClick(50)
                setClicked((prev) => {
                  return prev.map((element, key) => {
                    if (element.percent === 50) {
                      return { percent: 50, checked: true }
                    }
                    return { percent: element.percent, checked: false }
                  })
                })
              }}
            >
              50%
            </button>
            <input
              style={{
                border: state[1].clicked === true ? "1px solid black" : "0"
              }}
              className="btn-input"
              type="Number"
              placeholder="Custom"
              name="custom"
              value={customPercentage}
              onChange={handleCustomChange}
              onFocus={() => {
                setState((prev) => {
                  return prev.map((element) => {
                    if (element.field == "custom") {
                      return { field: "custom", clicked: true }
                    }
                    return { ...element, clicked: false }
                  })
                })
              }}
            ></input>
          </div>
        </div>

        {/* Number of People */}

        <div className="people">
          <div className="header">
            <div className="label">Number of People</div>
            <div
              className="label"
              style={{ color: zero === true ? "red" : "" }}
            >
              {zero === true && "Can't be zero"}
            </div>
          </div>
          <div
            className="input-people-field"
            style={{
              border:
                state[2].clicked === true
                  ? zero === true
                    ? "1px solid red"
                    : "1px solid black"
                  : "0"
            }}
            onClick={() => {
              setState((prev) => {
                return prev.map((element) => {
                  if (element.field == "people") {
                    return { field: "people", clicked: true }
                  }
                  return { ...element, clicked: false }
                })
              })
            }}
          >
            <i className="user fas fa-solid fa-user"></i>
            <input
              type="Number"
              name="people"
              value={people == 0 ? "" : people}
              onChange={handlePeopleChange}
              placeholder="0"
            ></input>
          </div>
        </div>
      </div>

      {/* tip part */}

      {/* right side of the part. */}
      <div className="right-side">
        {/* first tip amount container */}
        <div className="tip-amount-container">
          <div className="tip-amount">
            <div>Tip Amount</div>
            <div className="person">/ person</div>
          </div>
          <div className="money">${tipAmount !== 0 ? tipAmount : "0.00"}</div>
        </div>
        {/* total amount container */}
        <div className="total-amount-container">
          <div className="total-amount">
            <div>Total</div>
            <div className="person">/ person</div>
          </div>
          <div className="money">
            ${totalAmount == 0 ? "0.00" : totalAmount}
          </div>
        </div>
        <button
          className="reset-btn"
          style={style}
          onClick={handleReset}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          RESET
        </button>
      </div>
    </div>
  )
}

export default BoxContainer
