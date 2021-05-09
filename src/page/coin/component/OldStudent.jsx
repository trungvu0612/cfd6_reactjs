import React from "react";

export default function OldStudent() {
  return (
    <div className="section">
      <h2>Học viên giới thiệu (học viên cũ):</h2>
      <p>- Là học viên đã tham gia một hoặc nhiều khoá học tại CFD.</p>
      <p>
        - Mỗi khi có học viên mới đăng ký khoá học thành công (được xác nhận
        thành công từ đội ngũ CFD) tài khoản học viên giới thiệu sẽ được cộng
        một số điểm COIN tương ứng tùy từng khóa học (mỗi điểm có giá trị tương
        ứng 1000 VNĐ).
      </p>
      <p>
        - Điểm COIN được cộng dồn khi có nhiều học viên mới đăng ký thành công
        qua đường dẫn giới thiệu.
      </p>
      <p>
        - Mỗi đường dẫn giới thiệu có hiệu lực mãi mãi cho đến khi tài khoản
        giới thiệu bị khoá, xoá hoặc ngừng kích hoạt khi không có nhu cầu sử
        dụng từ phía học viên.
      </p>
      <p>
        - COIN có thể sử dụng để giảm giá cho những khoá học mới khi đăng ký
        khoá học tại website
        <a href="http://cfdtraining.vn/">cfdtraining.vn</a>.
      </p>
      <p>
        - COIN có thể sử dụng để quy đổi thành Voucher Tiki hoặc thẻ cào điện
        thoại (lưu ý: chương trình đổi COIN sang voucher Tiki hoặc thẻ cào điện
        thoại chỉ được áp dụng 2 lần đối với 1 tài khoản học viên).
      </p>
    </div>
  );
}
