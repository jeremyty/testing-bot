import { Image, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function CheckIcons() {
  const bitcoin =
    "https://i.ibb.co/Jnwf0PQ/bitcoin-btc-logo-removebg-preview.png";
  const ethereum =
    "https://i.ibb.co/g4PVyW4/png-transparent-ethereum-eth-hd-logo-thumbnail.png";
  const litecoin =
    "https://i.ibb.co/ZxL84Mn/litecoin-ltc-logo-removebg-preview.png";
  const binancecoin =
    "https://i.ibb.co/ZKpshCj/binance-coin-bnb-logo-CD94-CC6-D31-seeklogo-com.png";
  const solana =
    "https://i.ibb.co/LggD6S0/so2809sc45-solana-logo-solana-blockchain-platform-liblogo.png";
  const usdt =
    "https://i.ibb.co/r7Ms4yW/tether-usdt-logo-FA55-C7-F397-seeklogo-com-removebg-preview.png";

  return (
    <Form className="mx-5 mt-3">
      <Row className="mb-3">
        <Col className="text-center">
          <Image
            src={bitcoin}
            roundedCircle
            style={{
              width: 80,
              border: "4px solid #F8F9FA",
            }}
          />
          <Form.Check custom type="checkbox" id="icon1" className="mt-2" />
        </Col>
        <Col className="text-center">
          <Image
            src={ethereum}
            roundedCircle
            style={{
              width: 80,
              border: "4px solid #F8F9FA",
            }}
          />
          <Form.Check custom type="checkbox" id="icon2" className="mt-2" />
        </Col>
        <Col className="text-center">
          <Image
            src={litecoin}
            roundedCircle
            style={{
              width: 80,
              border: "4px solid #F8F9FA",
            }}
          />
          <Form.Check custom type="checkbox" id="icon3" className="mt-2" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="text-center">
          <Image
            src={binancecoin}
            roundedCircle
            style={{
              width: 80,
              border: "4px solid #F8F9FA",
            }}
          />
          <Form.Check custom type="checkbox" id="icon4" className="mt-2" />
        </Col>
        <Col className="text-center">
          <Image
            src={solana}
            roundedCircle
            style={{
              width: 80,
              border: "4px solid #F8F9FA",
            }}
          />
          <Form.Check custom type="checkbox" id="icon4" className="mt-2" />
        </Col>
        <Col className="text-center">
          <Image
            src={usdt}
            roundedCircle
            style={{
              width: 80,
              border: "4px solid #F8F9FA",
            }}
          />
          <Form.Check custom type="checkbox" id="icon4" className="mt-2" />
        </Col>
      </Row>
    </Form>
  );
}

export default CheckIcons;
