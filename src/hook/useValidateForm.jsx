import React, { useState } from "react";

let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i,
  emailPattern = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i,
  websitePattern =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;

export default function useValidateForm(initialForm, validate) {
  let [form, setForm] = useState(initialForm);
  let [error, setError] = useState({});

  // Lấy giá trị cho từng thay đổi trong input
  function inputOnChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }

  // kiểm tra giá trị cho từng biến input
  function check() {
    let errorObj = {};
    let { rule, message } = validate;

    for (let i in rule) {
      let r = rule[i];
      let m = message[i] || {};

      if (r.required && !form[i]?.trim()) {
        errorObj[i] = m?.required || "Không được để trống ô này.";
      }

      if (r.pattern && form[i]) {
        let { pattern } = r;
        if (pattern === "phone") pattern = phonePattern;
        if (pattern === "email") pattern = emailPattern;
        if (pattern === "website") pattern = websitePattern;

        if (!pattern?.test(form[i])) {
          errorObj[i] = m?.pattern || "Không đúng định dạng";
        }
      }
    }

    // form.name.trim().replace(/ +/g, "");
    // if (!form.name.trim()) {
    //   errorObj.name = "Thông tin này là bắt buộc.";
    // }
    // if (!form.phone.trim()) {
    //   errorObj.phone = "Thông tin này là bắt buộc.";
    // } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone.trim())) {
    //   errorObj.phone = "Sai giá trị";
    // }
    // if (!form.email.trim()) {
    //   errorObj.email = "Thông tin này là bắt buộc.";
    // } else if (
    //   !/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(
    //     form.email
    //   )
    // ) {
    //   errorObj.email = "Đây không phải link email.";
    // }
    // if (!form.website.trim()) {
    //   errorObj.website = "Thông tin này là bắt buộc.";
    // } else if (
    //   !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(
    //     form.website
    //   )
    // ) {
    //   errorObj.website = "Đây không phải link website.";
    // }
    // if (!form.title.trim()) {
    //   errorObj.title = "Thông tin này là bắt buộc.";
    // }

    setError(errorObj);

    return errorObj;
  }
  // trả giá trị cho chuỗi cacs function
  return {
    form,
    error,
    inputOnChange,
    check,
  };
}
