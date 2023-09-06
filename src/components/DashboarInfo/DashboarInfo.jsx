import { Col, Row, Table } from "react-bootstrap";
import "./DashboarInfo.css";

const DashboarInfo = () => {
  return (
    <div className="dashboard-info">
      <Row>
        <Col md={4}>
          <div className="box">
            <div className="box-header">
              <h4 className="text-center">الحفظ</h4>
              <div className="data-header">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>اخر اسبوع</th>
                      <th>الصفحات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="box">
            <div className="box-header">
              <h4 className="text-center">المراجعة</h4>
              <div className="data-header">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>اخر اسبوع</th>
                      <th>الصفحات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>

                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>

                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>

                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="box">
            <div className="box-header">
              <h4 className="text-center">التثبيت</h4>
              <div className="data-header">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>اخر اسبوع</th>
                      <th>الصفحات</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboarInfo;
