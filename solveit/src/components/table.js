import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap";
import "./table.css";

function SuspectTable(props) {
  const suspects = props.suspects;
  console.log(props);
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
            <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Cell</th>
              <th>City/State/Nation</th>
            </tr>
          </thead>
          <tbody>
            {suspects.map((suspect) => (
              <tr>
                <td>
                  <img src={suspect.picture.large}></img>
                </td>
                <td>
                  {suspect.name.first} {suspect.name.last}
                </td>
                <td><a href="mailto:{suspect.email}">{suspect.email}</a></td> 
                <td>{suspect.cell}</td>
                <td>{suspect.location.city}<br></br>{suspect.location.state}<br></br> {suspect.location.country}<br></br></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  ) : (
    <div>loading...</div>
  );
}

export default SuspectTable;
