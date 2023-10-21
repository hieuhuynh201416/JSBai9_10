// tạo mảng
var dssv = [];
var dataJson = localStorage.getItem("DSSV_LOCAL");
if (dataJson != null) {
  let result = JSON.parse(dataJson);

  dssv = result.map(function (item) {
    return new SinhVien(
      item.ma,
      item.ten,
      item.email,
      item.matKhau,
      item.toan,
      item.van
    );
  });
  renderDssv(dssv);
}

//render dssv
// function renderDssv(dssv) {
//   var contentHTML = "";

//   // duyệt mảng
//   for (var i = 0; i < dssv.length; i++) {
//     var data = dssv[i];
//     var trString = `<tr>
//        <td>${data.ma}</td>
//        <td>${data.ten}</td>
//        <td>${data.email}</td>
//        <td>${data.tinhDTB()}</td>
//        <td>
//        <button onclick="xoaSv('${data.ma}')" class="btn btn-danger">Xóa</button>

//        <button onclick="suaSv('${
//          data.ma
//        }')"class="btn btn-warning">Sửa</button></td>

//       </tr>`;
//     contentHTML = contentHTML + trString;
//   }

//   document.getElementById("tbodySinhVien").innerHTML = contentHTML;
// }

//Thêm SV
function themSv() {
  var _ma = document.getElementById("txtMaSV").value;
  var _ten = document.getElementById("txtTenSV").value;
  var _email = document.getElementById("txtEmail").value;
  var _matKhau = document.getElementById("txtPass").value;
  var _toan = document.getElementById("txtDiemToan").value * 1;
  var _van = document.getElementById("txtDiemVan").value * 1;

  //   tạo object
  var sv = {
    ma: _ma,
    ten: _ten,
    email: _email,
    matKhau: _matKhau,
    toan: _toan,
    van: _van,
    tinhDTB: function () {
      return (this.toan + this.van) / 2;
    },
  };

  dssv.push(sv);

  // lưu thông tin vào localStore
  var dataJson = JSON.stringify(dssv);
  localStorage.setItem("DSSV_LOCAL", dataJson);
  renderDssv(dssv);
}

// Xóa sv
function xoaSv(id) {
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });
  dssv.splice(viTri, 1);
  renderDssv(dssv);
}

//sửa sv
function suaSv(id) {
  var viTri = dssv.findIndex(function (item) {
    return item.ma == id;
  });

  var sv = dssv[viTri];

  // đưa thông tin lên form
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtDiemToan").value = sv.toan;
  document.getElementById("txtDiemVan").value = sv.van;
}
