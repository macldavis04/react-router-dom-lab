import { useState } from "react";
import { useNavigate } from "react-router";
import type { BoxSize, NewMailbox } from "../../types";
import styles from "./MailboxForm.module.css";

interface MailboxFormProps {
  addBox: (newBox: NewMailbox) => void;
}

const MailboxForm = ({ addBox }: MailboxFormProps) => {
  const navigate = useNavigate();

  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState<BoxSize>("Small");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate("/mailboxes");
  };

  return (
    <main>
      <h1>New Mailbox</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Box Owner</label>
        <input
          id="boxOwner"
          type="text"
          value={boxOwner}
          onChange={(event) => setBoxOwner(event.target.value)}
          required
        />

        <label htmlFor="boxSize">Box Size</label>
        <select
          id="boxSize"
          value={boxSize}
          onChange={(event) => setBoxSize(event.target.value as BoxSize)}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Create Mailbox</button>
      </form>
    </main>
  );
};

export default MailboxForm;