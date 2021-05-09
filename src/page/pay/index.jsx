import Incentives from "./component/Incentives";
import Payments from "./component/Payments";
import Refund from "./component/Refund";

export default function Pay() {
  return (
    <main className="paypage" id="main">
      <div className="container">
        <section>
          <h2 className="main-title">thanh toán</h2>
          <div className="content">
            <Payments />
            <Refund />
            <Incentives />
          </div>
        </section>
      </div>
    </main>
  );
}
