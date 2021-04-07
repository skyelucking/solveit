import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap";
import "./table.css";

function SuspectTable(props) {
  const [suspects, setSuspects] = useState(props.suspects);
  const [toggle, setToggle] = React.useState(true);
  let culprits;
  var rooms = [
    "Kitchen",
    "Hall",
    "Ballroom",
    "Conservatory",
    "Dining Room",
    "Cellar",
    "Billiard Room",
    "Library",
    "Lounge",
  ];
  var randRoom = rooms[Math.floor(Math.random() * rooms.length)];
  var weapons = [
    "Knife",
    "Candlestick",
    "Revolver",
    "Rope",
    "Lead Pipe",
    "Wrench",
  ];
  var randWeapon = weapons[Math.floor(Math.random() * weapons.length)];

  const getRandomIndex = (maxlength) => {
    return Math.floor(Math.random() * maxlength);
  };
  const calledOnce = React.useRef(false);

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    if (toggle === false) {
      let i;
      culprits = [...props.suspects];
      console.log("culprits:", culprits);
      culprits = culprits.map((suspect) => {
        i = getRandomIndex(rooms.length);
        suspect.room = rooms[i];
        i = getRandomIndex(weapons.length);
        suspect.weapon = weapons[i];
        return suspect;
      });
      // setSuspects(culprits);
      calledOnce.current = true;
    }
  }, [toggle]);
  // const suspects = props.suspects;
  console.log(props);
  console.log("suspects!", suspects);

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
              <th>Profile/ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Cell</th>
              {/* <th>City/State/Nation</th> */}
              <th>In The..</th>
              <th>With The..</th>
            </tr>
          </thead>
          <tbody>
            {culprits.map((suspect, index) => (
              <tr key={index}>
                <td>
                  <img src={suspect.picture.large}></img>
                  {suspect.uuid}
                </td>
                <td>
                  {suspect.name.first} {suspect.name.last}
                </td>
                <td>
                  <a href="mailto:{suspect.email}">{suspect.email}</a>
                </td>
                <td>{suspect.cell}</td>

                <td>{suspect.room}</td>
                <td>{suspect.weapon}</td>
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
