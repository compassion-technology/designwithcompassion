import React, { useRef, useState } from "react";
import {
  Button,
  TextField,
  TextArea,
} from "@compassion-global-experience/react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [formSubmitted, setformSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionError, setSubmissionError] = useState(false);
  const [topic, setTopic] = useState();
  const [nameState, setNameState] = useState();
  const [emailState, setEmailState] = useState();
  const [messageState, setMessageState] = useState();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const messageMax = 1200;
  const topicOptions = {
    new: "New Project",
    demo: "CDS Demo",
    request: "Feature Request",
    bug: "Bug Report",
  };

  const resetFormState = () => {
    setformSubmitted(false);
    setSubmissionMessage("");
    setSubmissionError(false);
    setTopic();
    setNameState();
    setEmailState();
    setMessageState();
  };

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFieldsFilled =
      nameInputRef.current.value.trim().length > 0 &&
      emailInputRef.current.value.trim().length > 0 &&
      messageInputRef.current.value.trim().length > 0;

    setNameState(
      nameInputRef.current.value.trim().length > 0 ? "success" : "error"
    );
    setEmailState(
      emailInputRef.current.value.trim().length > 0 ? "success" : "error"
    );
    setMessageState(
      messageInputRef.current.value.trim().length > 0 ? "success" : "error"
    );

    if (requiredFieldsFilled) {
      setformSubmitted(true);

      // Submit the form to Netlify
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          name: nameInputRef.current.value,
          email: emailInputRef.current.value,
          message: messageInputRef.current.value,
          topic,
        }),
      })
        .then(() => {
          // Handle successful form submission here
          console.log("Form submitted successfully");
          setSubmissionMessage("Thank you for contacting us.");
          setSubmissionError(false);
        })
        .catch((error) => {
          // Handle form submission error here
          console.error(error);
          setSubmissionMessage("An error occured while submitting the form");
          setSubmissionError(true);
        });
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <div className="contact-form-container">
      <h2>Let's Chat</h2>
      {formSubmitted ? (
        <div>{submissionMessage}</div>
      ) : (
        <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
          {/* A 'form-name' hidden input field is required for Gatsby */}
          {/* https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-static-site-generators */}
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="form-label">Topic</label>
            <div className="topic-options">
              <input
                name="topic"
                type="text"
                readonly
                value={topicOptions.new}
                onClick={handleTopicChange}
                className={`form-field ${
                  topic === topicOptions.new ? "selected-topic" : ""
                }`}
              />
              <input
                name="topic"
                type="text"
                readonly
                value={topicOptions.demo}
                onClick={handleTopicChange}
                className={`form-field ${
                  topic === topicOptions.demo ? "selected-topic" : ""
                }`}
              />
              <input
                name="topic"
                type="text"
                readonly
                value={topicOptions.request}
                onClick={handleTopicChange}
                className={`form-field ${
                  topic === topicOptions.request ? "selected-topic" : ""
                }`}
              />
              <input
                name="topic"
                type="text"
                readonly
                value={topicOptions.bug}
                onClick={handleTopicChange}
                className={`form-field ${
                  topic === topicOptions.bug ? "selected-topic" : ""
                }`}
              />
            </div>
          </div>
          <TextField
            label="Name"
            ref={nameInputRef}
            state={nameState}
            name="name"
          />
          <TextField
            label="Email"
            ref={emailInputRef}
            state={emailState}
            name="email"
          />
          <div>
            <TextArea
              label="Message"
              maxLength={messageMax}
              ref={messageInputRef}
              showCounter={true}
              size="large"
              state={messageState}
              name="message"
            />
          </div>

          <Button
            type="submit"
            label="Let’s get started"
            className="submit-button"
          >
            Let’s get started
          </Button>
        </form>
      )}
      {formSubmitted && submissionError && (
        <Button label="Try again" size="small" onClick={resetFormState} />
      )}
    </div>
  );
};

export default ContactForm;
