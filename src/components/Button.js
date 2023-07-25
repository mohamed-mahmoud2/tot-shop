import React from "react";
import Button from "react-bootstrap/Button";
export default function Buttons(props) {
  return (
    <div>
      <Button
        href={props.link}
        variant={props?.color}
        type={props?.type}
      >
        {props.title}
      </Button>
    </div>
  );
}
