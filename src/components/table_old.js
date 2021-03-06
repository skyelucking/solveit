import { Container, Table } from "react-bootstrap";
 ​import "bootstrap/dist/css/bootstrap.min.css";
import "./table.css";
​

function SuspectTable(props) {
  const rooms = [
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
​
  const weapons = [
    "Knife",
    "Candlestick",
    "Revolver",
    "Rope",
    "Lead Pipe",
    "Wrench",
  ];
​
  console.log(props);
​
  const suspects = props.suspects;
​
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
              <th>City/State/Nation</th>
              <th>In The..</th>
              <th>With The..</th>
            </tr>
          </thead>
          <tbody>
            {suspects.map((suspect, index) => (
              <tr key={index}>
                <td>
                  <img src={suspect.picture.large} alt="mug shot" />
                  {suspect.uuid}
                </td>
                <td>
                  {suspect.name.first} {suspect.name.last}
                </td>
                <td>
                  <a href="mailto:{suspect.email}">{suspect.email}</a>
                </td>
                <td>{suspect.cell}</td>
                <td>
                  {suspect.location.city}
                  <br></br>
                  {suspect.location.state}
                  <br></br> {suspect.location.country}
                  <br></br>
                </td>
                <td>{rooms[Math.floor(Math.random() * rooms.length)]}</td>
                <td>{weapons[Math.floor(Math.random() * weapons.length)]}</td>
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
​
export default SuspectTable;