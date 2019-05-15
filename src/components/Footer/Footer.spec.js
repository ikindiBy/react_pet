import React from "react";
import { shallow, mount } from "enzyme";
import { Footer } from "./Footer.jsx";
// import Adapter from "enzyme-adapter-react-16";

describe("Footer component", () => {
  let year = "2019";

  beforeAll(() => {
    // Enzyme.configure({ adapter: new Adapter() });
    //   Date.now = jest.fn(() => Date.UTC(2017, 0, 1, 1, 1, 1, 1));

    //     todo = {
    //         title: 'test',
    //         id: 1,
    //         complited: false,
    //         created: Date.now()
    //     }
    year = "2019";
  });

  it("should be render correctly", () => {
    const component = shallow(<Footer year={year} />);
    expect(component).toMatchSnapshot();
  });

  // it('should be call onRemove', () => {
  //     const onRemove = jest.fn();
  //     const component = mount(<Item todo={todo} onRemove={onRemove}/>);
  //     const btn = component.find('.btn').simulate('click');
  //     expect(onRemove).toHaveBeenCalled();
  // });
});
