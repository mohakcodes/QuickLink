import * as React from 'react'
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";

const EmailTemp = ({res}) => {
  return (
    <Html>
      <Head />
      <Preview>You recent activity</Preview>
      <Body style={main}>
        <Container>
          <Section>
            <Img src="https://i.postimg.cc/52LQqH47/quicklink.png" />
          </Section>

          <Section style={content}>

            <Row style={{ ...boxInfos, paddingBottom: "0", backgroundColor:"#ddc9ff" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {res?.emailToSend?.split("@")[0]},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {res.userName} shared a file with you
                </Heading>

                <Text style={paragraph}>
                  <b>File Name: {res.fileName}</b>
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Size: {(res.fileSize/1024/1024).toFixed(2)} <span>MB</span></b>
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Type: {res.fileType}</b>
                </Text>
                <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Access & Download File
                </Text>

                <Text style={paragraph}>
                  If this was you, there's nothing else you need to do.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Click the button below to access the file 
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                  <Button style={button} href={`${process.env.NEXT_PUBLIC_BASE_URL}save/${res.fileId}`}>
                    Download
                  </Button>
              </Column>
            </Row>
          </Section>

          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2024 | MohakCodes
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};

export default EmailTemp