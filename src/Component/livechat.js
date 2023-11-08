import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Load messages from localStorage on component mount
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(storedMessages);
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const message = { user: "You", text: newMessage }; // Fix the order of user and text
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <MDBContainer className="py-5 gradient-custom">
      <MDBRow>
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
          <h5 className="font-weight-bold mb-3 text-center text-white">Member</h5>
          <MDBCard className="mask-custom">
            <MDBCardBody>
              <MDBTypography listUnStyled className="mb-0">
                {messages.map((message, index) => (
                  <li className="p-2 border-bottom" key={index}>
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0">{message.user}</p>
                        <p className="small text-white">{message.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol md="6" lg="7" xl="8">
          <MDBTypography listUnStyled className="text-white">
            {messages.map((message, index) => (
              <li className="d-flex justify-content-between mb-4" key={index}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                  alt="avatar"
                  className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                  width="60"
                />
                <MDBCard className="mask-custom">
                  <MDBCardHeader
                    className="d-flex justify-content-between p-3"
                    style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}
                  >
                    <p className="fw-bold mb-0">{message.user}</p>
                    <p className="text-light small mb-0">
                      <MDBIcon far icon="clock" /> Just now
                    </p>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <p className="mb-0">{message.text}</p>
                  </MDBCardBody>
                </MDBCard>
              </li>
            ))}
          </MDBTypography>
          <li className="mb-3">
            <MDBTextArea
              label="Message"
              id="textAreaExample"
              rows={4}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </li>
          <MDBBtn
            color="light"
            size="lg"
            rounded
            className="float-end"
            onClick={handleSendMessage}
          >
            Send
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
