/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import {
  render,
  cleanup,
  screen,
  act,
  fireEvent,
} from "@testing-library/react";
import {ReportColumnDisplayText} from "./DisplayText";   
import { Formik } from "formik";
import { Form } from "react-bootstrap";

const initialValues = { testName:"" } 

const handleSubmit = jest.fn();

const testId = 'testColumn-column';
 
describe("ReportColumnDisplayText Component", () => {
  // render the ReportColumnDisplayText component
  beforeEach(() => { 
  });

  // after cleanup when test-case execution is done
  afterEach(cleanup); 

  it("renders 'test Value' correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayText forColumn="testColumn" label="test label" value="test Value" /></tr></tbody></table>
    );

    expect(screen.getByText("test Value")).toBeInTheDocument(); 
    
  });
 
  it("renders no value correctly", async () => {
    render(
       <table><tbody><tr><ReportColumnDisplayText forColumn="testColumn" label="test label" value="" /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders null correctly", async () => {
    const noVal:any = null;

    render(
       <table><tbody><tr><ReportColumnDisplayText forColumn="testColumn" label="test label" value={noVal} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
  
  it("renders isVisible=false correctly", async () => { 

    render(
      <table><tbody><tr><ReportColumnDisplayText forColumn="testColumn" label="test label" value="test value" isVisible={false} /></tr></tbody></table>
    );

    expect(screen.getByTestId(testId)).toBeInTheDocument();

    expect(screen.getByTestId(testId)).toContainHTML("<td data-testid=\"testColumn-column-1\" />");
  });
 
 
});
