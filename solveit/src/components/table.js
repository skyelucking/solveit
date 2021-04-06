import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from "react-bootstrap";
import './table.css';

function SuspectTable(props) {
       
    const suspects = props.suspects
    console.log(props)
    return suspects.length ? (
        <div className="Table">
          <Container
            style={{
              color: "#000",
              textAlign: "center",
              alignItems: "center",
              display: "block",
            }}
          >
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {suspects.map(suspect => 
                  <tr>
                    <td>{suspect.email}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Container>
        </div>
      ) : <div>loading...</div>;
    
    }
    
    export default SuspectTable;