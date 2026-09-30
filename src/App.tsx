import { useState } from "react";
import { Routes, Route } from "react-router";
import type { Mailbox, NewMailbox } from "./types";

import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

const Home = () => {
  return (
    <main>
      <h1>Post Office</h1>
    </main>
  );
};

const App = () => {
  const [mailboxes, setMailboxes] = useState<Mailbox[]>([]);

  const addBox = (newBox: NewMailbox) => {
    const boxWithId: Mailbox = {
      _id: mailboxes.length + 1,
      boxOwner: newBox.boxOwner,
      boxSize: newBox.boxSize,
    };
    setMailboxes([...mailboxes, boxWithId]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/new" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </>
  );
};

export default App;