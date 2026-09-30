import { Link } from "react-router";
import type { Mailbox } from "../../types";
import styles from "./MailboxList.module.css";

interface MailboxListProps {
  mailboxes: Mailbox[];
}

const MailboxList = ({ mailboxes }: MailboxListProps) => {
  return (
    <main>
      <h1>Mailboxes</h1>

      {mailboxes.length === 0 ? (
        <p>No mailboxes yet!</p>
      ) : (
        <div className={styles.grid}>
          {mailboxes.map((mailbox) => (
            <Link
              key={mailbox._id}
              to={`/mailboxes/${mailbox._id}`}
              className={styles.box}
            >
              Box {mailbox._id}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default MailboxList;