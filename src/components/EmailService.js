import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/component_css/window_content.css";

function EmailService(props) {
  const form = useRef();
  const fromName = useRef();
  const fromEmail = useRef();
  const subject = useRef();
  const message = useRef();

  const [headerMessage, setHeaderMessage] = useState("Message me!");

  const sendEmail = (e) => {
    e.preventDefault();
    let from_name_val = document.forms["email-form"]["from_name"].value;
    let from_email_val = document.forms["email-form"]["from_email"].value;
    let subject_val = document.forms["email-form"]["subject"].value;
    let message_val = document.forms["email-form"]["message"].value;

    if (
      (from_name_val === null || from_name_val === "",
      from_email_val === null || from_email_val === "",
      subject_val === null || subject_val === "",
      message_val === null || message_val === "")
    ) {
      [].slice
        .call(document.getElementsByClassName("to-clear"))
        .forEach((ele) => {
          if (ele.value === "" || ele.value === null) {
            ele.style.borderColor = "rgb(255, 121, 121)";
          }
        });
      setHeaderMessage("Some fields are missing!");
    } else {
      emailjs
        .sendForm(
          "service_qrdjarh",
          "template_264nsej",
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            [].slice
              .call(document.getElementsByClassName("to-clear"))
              .forEach((ele) => {
                ele.value = "";
                ele.style.borderColor = "transparent";
              });

            setHeaderMessage("Message Sent!");
          },
          (error) => {
            console.error(error.text);
            setHeaderMessage(
              "Uh oh, something went wrong and the message could not send. Please try again later..."
            );
          }
        );
    }
  };

  return (
    <div className="mail-window-content">
      <span>{headerMessage}</span>
      <form name="email-form" ref={form} id="email-form" onSubmit={sendEmail}>
        <input
          ref={fromName}
          name="from_name"
          className="mail-from-name to-clear"
          placeholder="Your Name"
        ></input>
        <input
          ref={fromEmail}
          name="from_email"
          className="mail-from-email to-clear"
          placeholder="Your Email"
        ></input>
        <input
          ref={subject}
          name="subject"
          className="mail-subject to-clear"
          placeholder="Subject"
        ></input>
        <textarea
          ref={message}
          name="message"
          className="mail-content to-clear"
          placeholder="Type your message here"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default EmailService;
