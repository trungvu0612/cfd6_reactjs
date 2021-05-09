import Founder from "./component/Founder";
import Member from "./component/Member";

export default function Team() {
  return (
    <main className="team" id="main">
      <section>
        <div className="container">
          <div className="top">
            <h2 className="main-title">cfd team</h2>
            <p className="top-des">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam
              tincidunt elementum sem non luctus
            </p>
          </div>
          <div className="list row">
            <Founder
              img="img/thumb-member.jpg"
              name="Trần Nghĩa"
              className="Founder &amp; Creative Front-End Developer"
            />
            <Founder
              img="img/thumb-member.jpg"
              name="Đặng Thuyền Vương"
              className="Co-Founder &amp; Fullstack Developer"
            />
            <Founder
              img="img/thumb-member.jpg"
              name="Đặng Thuyền Quân"
              className="Co-Founder &amp; Fullstack Developer"
            />
            <Founder
              img="img/thumb-member.jpg"
              name="Nguyễn Đức Huy"
              className="Co-Founder &amp; Front-End Developer"
            />
            <Member
              img="img/thumb-member.jpg"
              name="Diệp Anh Thy"
              className="CFD1-Offline"
            />
            <Member
              img="img/thumb-member.jpg"
              name="Huỳnh Tiến Tài"
              className="CFD1-Offline"
            />
            <Member
              img="img/thumb-member.jpg"
              name="Ngô Thành Long"
              className="CFD1-Offline"
            />
            <Member
              img="img/thumb-member.jpg"
              name="Trần Anh Tuấn"
              className="CFD1-Offline"
            />
            <Member
              img="img/thumb-member.jpg"
              name="Ngô Thành Long"
              className="CFD1-Offline"
            />
            <Member
              img="img/thumb-member.jpg"
              name="Nguyễn Thanh Tùng"
              className="CFD1-Offline"
            />
            <Member
              img="img/thumb-member.jpg"
              name="Phạm Thành Trung"
              className="CFD1-Offline"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
