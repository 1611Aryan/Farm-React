import React, { FC, ReactElement,} from "react";
import { Button, Form, Card, Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayUrlProps {
  forColumn:string 
  value: string 
  label:string
  linkText: string 
  isVisible?:boolean
  conditionallyVisible?:boolean
}
   
export const ReportColumnDisplayUrl: FC<ReportColumnDisplayUrlProps> = ({
  forColumn, 
  value,
  label,
  linkText,
  isVisible = true,
  conditionallyVisible = true
}): ReactElement => { 

  const groupName = forColumn +'-column';
  
  const displayValue = (isVisible && conditionallyVisible);
      
  const formatText = () => {  
    let result:string = "";
    
    try {
      
      if(value == null || value == "" || !displayValue)
      {
          return result;
      }
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayUrl');
    }
    
    return value;
  }

  return ( 
    <Col data-testid={groupName} lg="6" md="6" xs="12" hidden={!isVisible}>
        <ListGroup.Item
            as="li"
            className="text-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{label}</div>
                <a href={value} 
                  hidden={!displayValue}
                >
                    {linkText}
                </a>&nbsp;
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   