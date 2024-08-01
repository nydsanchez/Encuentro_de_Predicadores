import { useState } from "react";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import OptAct from "../components/smartOptions/ActivityOp";
import Footer from "../components/footer/Footer";
import People from "../components/form/People";
import Church from "../components/form/Church";
import Ticket from "../components/form/Ticket";
import PeopleTicket from "../components/form/PeopleTicket";
import styles from "../css/nuevo.module.css";

function Registro() {
  const [showPeople, setShowPeople] = useState(false);
  const [showChurch, setShowChurch] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [showPeopleTicket, setShowPeopleTicket] = useState(false);

  const [isPeopleDisabled, setIsPeopleDisabled] = useState(false);
  const [isChurchDisabled, setIsChurchDisabled] = useState(false);
  const [isTicketDisabled, setIsTicketDisabled] = useState(false);
  const [isPeopleTicketDisabled, setIsPeopleTicketDisabled] = useState(false);

  const handleShowPeople = () => {
    setShowPeople(true);
    setIsChurchDisabled(true);
    setIsTicketDisabled(true);
    setIsPeopleTicketDisabled(true);
  };
  const handleShowChurch = () => {
    setShowChurch(true);
    setIsPeopleDisabled(true);
    setIsTicketDisabled(true);
    setIsPeopleTicketDisabled(true);
  };
  const handleShowTicket = () => {
    setShowTicket(true);
    setIsChurchDisabled(true);
    setIsPeopleDisabled(true);
    setIsPeopleTicketDisabled(true);
  };
  const handleShowPeopleTicket = () => {
    setShowPeopleTicket(true);
    setIsChurchDisabled(true);
    setIsPeopleDisabled(true);
    setIsTicketDisabled(true);
  };

  const handleClosePeopleTicket = () => {
    setShowPeopleTicket(false);
    setIsChurchDisabled(false);
    setIsPeopleDisabled(false);
    setIsTicketDisabled(false);
  };
  const handleCloseTicket = () => {
    setShowTicket(false);
    setIsChurchDisabled(false);
    setIsPeopleDisabled(false);
    setIsPeopleTicketDisabled(false);
  };
  const handleClosePeople = () => {
    setShowPeople(false);
    setIsChurchDisabled(false);
    setIsTicketDisabled(false);
    setIsPeopleTicketDisabled(false);
  };

  const handleCloseChurch = () => {
    setShowChurch(false);
    setIsPeopleDisabled(false);
    setIsTicketDisabled(false);
    setIsPeopleTicketDisabled(false);
  };
  return (
    <div className={styles.page_new}>
      <header className={styles.page_new_header}>
        <Header />
      </header>
      <aside className={styles.page_new_asideMenu}>
        <Menu />
      </aside>
      <main className={styles.page_new_MainSection}>
        <OptAct
          onPeopleClick={handleShowPeople}
          onChurchClick={handleShowChurch}
          onTicketClick={handleShowTicket}
          onPeopleTicketClick={handleShowPeopleTicket}
          isChurchDisabled={isChurchDisabled}
          isPeopleDisabled={isPeopleDisabled}
          isTicketDisabled={isTicketDisabled}
          isPeopleTicketDisabled={isPeopleTicketDisabled}
        />
        {showPeople && <People onClose={handleClosePeople} />}
        {showChurch && <Church onClose={handleCloseChurch} />}
        {showPeopleTicket && <PeopleTicket onClose={handleClosePeopleTicket} />}
        {showTicket && <Ticket onClose={handleCloseTicket} />}
      </main>
      <footer className={styles.page_new_footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Registro;
