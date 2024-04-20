import React from "react";
import Button from "./Button";

export default function Bigcard({ item }) {
  return (
    <div className="px-4 py-2 flex flex-col gap-3 rounded-md bg-bg-light hover:bg-bg-lighter">
      <h5>{item.tag}</h5>
      <h5 className="font-bold">{item.title}</h5>
      <h6>{item.tagline}</h6>
      <p>{item.details}</p>
      <Button icon={item.buttonIcon} text={item.buttonText} />
      {/* <Button
        icon={item.buttonIcon}
        text={item.buttonText}
        action="pending"
        type="action"
      /> */}
    </div>
  );
}
