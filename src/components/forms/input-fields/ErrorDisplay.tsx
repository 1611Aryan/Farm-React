import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
   
export interface ErrorDisplayProps {
  name:string
  errorCsv?: string  
  errorArray?: string [] 
}
   
export const ErrorDisplay: FC<ErrorDisplayProps> = ({
  name="",
  errorCsv = "",
  errorArray = []
}): ReactElement => { 

  const errorArray2 = errorCsv.split(',');
  const allErrors = errorArray.concat(errorArray2)
      
  return (
    <div data-testid={name}> 
      {allErrors && allErrors.length > 0 ? ( 
          allErrors.map((item, index) => {
            return (
              <div className="text-left text-danger mt-2 mb-2" key={item}>{item}</div>  
          );
        })
      ) : null}
    </div>
  );
};
   
export default ErrorDisplay;