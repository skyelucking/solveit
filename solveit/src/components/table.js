import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import './table.css';
import '../pages/suspects';

function Table(props) {
    
    const suspects = props.suspects
    
    return (
        <div className="Table">
          <header>
            <h1>All Smiles Employee Directory</h1>
          </header>
          <Container
            style={{
              color: "#000",
              textAlign: "center",
              alignItems: "center",
              display: "block",
            }}
          >
            <form>
              Filter By: <input htmlname="filter_by" id="fitler-by"></input>
            </form>
            <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell                            >
                Avatar
              </Table.HeaderCell>
              <Table.HeaderCell
              
              >
                Name
              </Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((suspects, i) => (
              <Table.Row key={i}>
                <Table.Cell>
                  <img
                    style={{
                      display: "block",
                      borderColor: "red",
                      borderWidth: 15,
                      height: 100,
                      width: 100,
                      textAlign: "center",
                      
                    }}
                    src={suspects.picture.large} alt="employee"
                  />
                </Table.Cell>
                <Table.Cell>
                  {suspects.name.title}. {suspects.name.first}{" "}
                  {suspects.name.last}
                </Table.Cell>
                <Table.Cell>{suspects.email}</Table.Cell>
                <Table.Cell>{suspects.cell}</Table.Cell>
                
                <Table.Cell
                  style={{
                    textAlign: "left",
                  }}
                >
                  {suspects.location.city} <br></br>
                  {suspects.location.state}<br></br>
                  {suspects.nat}
                  <br></br>
                  
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
          </Container>
        </div>
      );
    
    }
    
    export default Table;