import React from "react";
import { Button, Heading } from "../components";
import { ButtonVariant } from "../components/Tags/Button/Button.props";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Heading headingLevel="h4">Hello world</Heading>
      <Button variant={ButtonVariant.PRIMARY}>Me</Button>
    </>
  );
}
