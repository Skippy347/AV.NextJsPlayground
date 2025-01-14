import React from "react";
import { Button, Heading, Label } from "../components";
import { ButtonVariant } from "../components/Tags/Button/Button.props";
import { LabelVariant } from "../components/Tags/Label/Label.props";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Heading headingLevel="h4">Hello world</Heading>
      <Button variant={ButtonVariant.PRIMARY}>Me</Button>
      <Label variant={LabelVariant.PRIMARY}>Hello</Label>
      <Label variant={LabelVariant.SECONDARY}>Hello</Label>
    </>
  );
}
