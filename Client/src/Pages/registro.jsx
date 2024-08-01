import { useState } from "react";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import OptAct from "../components/smartOptions/ActivityOp";
import Footer from "../components/footer/Footer";
import People from "../components/form/People";
import Church from "../components/form/Church";
import PeopleTicket from "../components/form/PeopleTicket";
import styles from "../css/nuevo.module.css";

function Registro() {
  const [showForm, setShowForm] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showPeopleTicket, setShowPeopleTicket] = useState(false);

  const [isViewDisabled, setIsViewDisabled] = useState(false);
  const [isNewDisabled, setIsNewDisabled] = useState(false);
  const [isPeopleTicketDisabled, setIsPeopleTicketDisabled] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    setIsViewDisabled(true);
    setIsPeopleTicketDisabled(true);
  };
  const handleShowTable = () => {
    setShowTable(true);
    setIsNewDisabled(true);
    setIsPeopleTicketDisabled(true);
  };
  const handleShowPeopleTicket = () => {
    setShowPeopleTicket(true);
    setIsViewDisabled(true);
    setIsNewDisabled(true);
  };

  const handleClosePeopleTicket = () => {
    setShowPeopleTicket(false);
    setIsViewDisabled(false);
    setIsNewDisabled(false);
  };
  const handleCloseForm = () => {
    setShowForm(false);
    setIsViewDisabled(false);
    setIsPeopleTicketDisabled(false);
  };

  const handleCloseTable = () => {
    setShowTable(false);
    setIsNewDisabled(false);
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
          onNewClick={handleShowForm}
          onViewClick={handleShowTable}
          onPeopleTicketClick={handleShowPeopleTicket}
          isViewDisabled={isViewDisabled}
          isNewDisabled={isNewDisabled}
          isPeopleTicketDisabled={isPeopleTicketDisabled}
        />
        {showForm && <People onClose={handleCloseForm} />}
        {showTable && <Church onClose={handleCloseTable} />}
        {showPeopleTicket && <PeopleTicket onClose={handleClosePeopleTicket} />}
      </main>
      <footer className={styles.page_new_footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Registro;
