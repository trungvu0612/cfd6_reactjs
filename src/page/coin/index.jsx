import NewStudent from "./component/NewStudent";
import OldStudent from "./component/OldStudent";
import OverView from "./component/overview";

export default function Coin() {
  return (
    <main className="paypage" id="main">
      <div className="container">
        <section>
          <h2 className="main-title">Giới thiệu Coin</h2>
          <div className="content">
            <OverView />
            <OldStudent />
            <NewStudent />
          </div>
        </section>
      </div>
    </main>
  );
}
