import { useParams } from "react-router";
import type { Mailbox } from "../../types";
import styles from "./MailboxDetails.module.css";

interface MailboxDetailsProps {
  mailboxes: Mailbox[];
}

const MailboxDetails = ({ mailboxes }: MailboxDetailsProps) => {
  const { mailboxId } = useParams();
  const idNumber = Number(mailboxId);

  const mailbox = mailboxes.find((box) => box._id === idNumber);

  if (!mailbox) {
    return (
      <main>
        <h1>Mailbox Not Found!</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Mailbox {mailbox._id}</h1>
      <div className={styles.card}>
        <p>
          <strong>Box Number:</strong> {mailbox._id}
        </p>
        <p>
          <strong>Owner:</strong> {mailbox.boxOwner}
        </p>
        <p>
          <strong>Size:</strong> {mailbox.boxSize}
        </p>
      </div>
    </main>
  );
};

export default MailboxDetails;