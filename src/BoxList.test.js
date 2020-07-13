import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

// smoke test
it("renders without crashing", function() {
  render(<BoxList />);
});
// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});


it("can add a new box", function() {
  const { getByLabelText, queryByText, getByText } = render(<BoxList />);

  // no items yet
  expect(queryByText("X")).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Background Color:");
  const submitBtn = queryByText("Add a new box!")

  // fill out the form
  fireEvent.change(widthInput, { target: { value: "200px" }});
  fireEvent.change(heightInput, { target: { value: "100px" }});
  fireEvent.change(colorInput, { target: { value: "#b13e3e" }});
  fireEvent.click(submitBtn);

  // item exists!
  const removeBtn = getByText("X");
  expect(removeBtn).toBeInTheDocument();
  expect(removeBtn.previousSibling).toHaveStyle(`
    width: 200px;
    height: 100px;
    background-color: #b13e3e;
  `);

});

it("can remove a new box", function() {
  const { getByLabelText, queryByText, getByText } = render(<BoxList />);

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Background Color:");
  const submitBtn = queryByText("Add a new box!")

  // fill out the form
  fireEvent.change(widthInput, { target: { value: "200px" }});
  fireEvent.change(heightInput, { target: { value: "100px" }});
  fireEvent.change(colorInput, { target: { value: "#b13e3e" }});
  fireEvent.click(submitBtn);
  
  // item exists!
  const removeBtn = getByText("X");
  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
});