import React from "react";

export default function GetInTouch() {
  const [email, setEmail] = React.useState("");

  function changeHandler(event) {
    setEmail(event.target.value);
  }

  function clickHandler() {
    fetch(
      "https://acciojob-module-7-test-default-rtdb.asia-southeast1.firebasedatabase.app/emails.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: { email }
        })
      }
    );
    setEmail("");
  }

  return (
    <>
      <div className="inTouch">
        <h5>Get In Touch</h5>
        <div>
          <div className="email">
            <input
              type="email"
              placeholder="Your Email"
              onChange={changeHandler}
              value={email}
            />
            <button onClick={clickHandler}>Subscribe</button>
          </div>
          <p className="input-text">Lorem impsum dolor amit</p>
        </div>
      </div>
    </>
  );
}
