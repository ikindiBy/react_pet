import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Button from "../src/components/Button";

const ButtonSimpleExampleProps = {
  name: "Push it!"
};

storiesOf("Button", module)
  .add("with text", () => <Button {...ButtonSimpleExampleProps} />)
  .add(
    "with info",
    withInfo({})(() => <Button {...ButtonSimpleExampleProps} />)
  );
