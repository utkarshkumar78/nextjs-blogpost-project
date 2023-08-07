import { useRef } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    if (
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredEmail ||
      !enteredEmail.includes("@") ||
      !enteredFeedback ||
      enteredFeedback.trim() === ""
    ) {
      return;
    }

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ enteredName, enteredEmail, enteredFeedback }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return;
        }
        return res.json();
      })
      .then((data) => {
        nameInputRef.current.value = "";
        emailInputRef.current.value = "";
        feedbackInputRef.current.value = "";
      });
  }

  return (
    <>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles["form-control"]}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={nameInputRef} />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="description">Feedback</label>
          <textarea
            id="description"
            rows="10"
            ref={feedbackInputRef}
          ></textarea>
        </div>
        <div className={styles["form-action"]}>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
