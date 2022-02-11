import React from "react";

export default function CourseElement(props) {
  let color = "#ed1a3b";

  return <div style={{ backgroundColor: props.color }}>{props.text}</div>;
}
