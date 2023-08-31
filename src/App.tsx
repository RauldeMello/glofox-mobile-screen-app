import "./App.css";

import {
  BatteryMedium,
  WifiHigh,
  CellSignalFull,
  UserPlus,
  CalendarCheck,
  QrCode,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="iphone-widgets">
          <span className="time">14:40</span>
          <CellSignalFull size={22} />
          <WifiHigh size={22} />
          <BatteryMedium size={22} />
        </div>
        <div className="caret-icon-container">
          <CaretLeft size={30} />
        </div>
        <h2>My visits</h2>
      </header>

      <main className="main">
        <section className="membership-time">
          <h4 className="membership-time__title">You've been our member for</h4>
          <div className="membership-time__content-container">
            <div className="user-icon-container">
              <UserPlus fill="#5450c4" size={25} />
            </div>
            <span>1 year 3 months &#127881;</span>
          </div>
        </section>

        <h1 className="page-h1">Reach your goals today &#128170;</h1>

        <section className="main-content-cards">
          <div className="card">
            <div className="card-icons-container">
              <CalendarCheck fill="#5450c4" size={25} />
            </div>
            <span className="card__text-normal">Class completed</span>
            <span className="card__text-bold">128</span>
            <span className="card__text-light">this month</span>
          </div>

          <div className="card">
            <div className="card-icons-container">
              <QrCode fill="#5450c4" size={25} />
            </div>
            <span className="card__text-normal">Studio check in</span>
            <span className="card__text-bold">128</span>
            <span className="card__text-light">this month</span>
          </div>
        </section>

        <div className="btn-container">
          <button>
            <span>Book more classes to upgrade your level!</span>
            <CaretRight size={20} />
          </button>
        </div>
      </main>

      <footer className="footer">
        <img src="src/assets/Screenshot from 2023-08-30 22-14-00.png" />
        <button>New feature coming soon!</button>
        <div className="line"></div>
      </footer>
    </div>
  );
}

export default App;
