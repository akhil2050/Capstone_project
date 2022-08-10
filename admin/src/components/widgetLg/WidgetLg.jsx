import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Movies</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">MovieTitle</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Type</th>
            <th className="widgetLgTh">Genre</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="assets/series9.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Tom &amp; jerry</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">Series</td>
            <td className="widgetLgStatus">
              Cartoon
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="assets/series9.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Tom &amp; jerry</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">Series</td>
            <td className="widgetLgStatus">
            Cartoon
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="assets/series9.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Tom &amp; jerry</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">Series</td>
            <td className="widgetLgStatus">
            Cartoon
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="assets/series9.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Tom &amp; jerry</span>
            </td>
            <td className="widgetLgDate">2 Jun 2022</td>
            <td className="widgetLgAmount">Series</td>
            <td className="widgetLgStatus">
                 Cartoon
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
