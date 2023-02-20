import "./App.css";
import Row from "./components/Row/row.component";

function App() {
  const data = [
    [" ", "w", " ", "w", " ", "w", " ", "w"],
    ["w", " ", "w", " ", "B", " ", "o", " "],
    [" ", "W", " ", "w", " ", "W", " ", "W"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["W", " ", "b", " ", "b", " ", "b", " "],
    [" ", "b", " ", "b", " ", "b", " ", "b"],
    ["b", " ", "b", " ", "b", " ", "B", " "],
  ];
  return (
    <table className="no-border">
      <thead>
        <tr>
          <th></th>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
          <th>e</th>
          <th>f</th>
          <th>g</th>
          <th>h</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          const number = data.length - index;
          return <Row key={number.toString()} number={number} data={row} />;
        })}
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
          <th>e</th>
          <th>f</th>
          <th>g</th>
          <th>h</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
}
export default App;
