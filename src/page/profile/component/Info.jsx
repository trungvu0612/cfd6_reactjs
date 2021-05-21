import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import useValidateForm from "../../../hook/useValidateForm";
import Auth from "../../../Servises/auth";

export default function Info() {
  let { slug } = useParams();
  let { data } = useSelector((store) => store.authReducer);

  let { form, error, inputOnChange, check } = useValidateForm(
    {
      // lấy ra những input cần được set rule.
      ...data,
    },
    {
      // đặt rule cho từng input cần được set.
      rule: {
        name: {
          required: true,
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        email: {
          required: true,
          pattern: "email",
        },
        link: {
          required: true,
          pattern: "link",
        },
        skype: {
          required: true,
          pattern: "skype",
        },
      },
      message: {
        name: {
          required: "Họ và tên không được để trống",
        },
        phone: {
          required: "Số điện thoại không được để trống",
          pattern: "Số điện thoại không xác định được",
        },
        email: {
          required: "Email không được để trống",
          pattern: "Đây không phải link email",
        },
        link: {
          required: "Link Facebook không được để trống",
          pattern: "Đây không phải là link Facebook",
        },
        skype: {
          required: "Link Skype không được để trống",
          pattern: "Đây không phải là link Skype",
        },
      },
    }
  );

  let dispatch = useDispatch();

  async function onSubmit() {
    let errorObj = check();

    if (Object.keys(errorObj).length === 0) {
      let res = await Auth.update(form);
      if (res?.data) {
        dispatch({
          type: "UPDATE",
          payload: res.data,
        });
      }
    }
  }

  return (
    <div className="tab1">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          value={form.name}
          name="name"
          onChange={inputOnChange}
          type="text"
          placeholder="Nguyễn Văn A"
        />
        {error.name && <p className="error-text">{error.name}</p>}
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input
          value={form.phone}
          name="phone"
          onChange={inputOnChange}
          type="text"
          placeholder="0949******"
        />
        {error.phone && <p className="error-text">{error.phone}</p>}
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input
          value={form.email}
          name="email"
          onChange={inputOnChange}
          defaultValue="vuong.dang@dna.vn"
          placeholder="vuong.dang@dna.vn"
          type="text"
        />
        {error.email && <p className="error-text">{error.email}</p>}
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input
          value={form.link}
          name="link"
          onChange={inputOnChange}
          type="text"
          placeholder="Facebook url"
        />
        {error.link && <p className="error-text">{error.link}</p>}
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input
          value={form.skype}
          name="skype"
          onChange={inputOnChange}
          type="text"
          placeholder="Skype url"
        />
        {error.skype && <p className="error-text">{error.skype}</p>}
      </label>
      <div onClick={onSubmit} className="btn main rect">
        LƯU LẠI
      </div>
    </div>
  );
}
