/* eslint-disable import/no-extraneous-dependencies */

/** Used in jest.config.js */

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";
import { createSerializer } from "enzyme-to-json";

expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

configure({ adapter: new Adapter() });
