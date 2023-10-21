function renderDssv(dssv) {
  var contentHTML = "";

  // duyệt mảng
  for (var i = 0; i < dssv.length; i++) {
    var data = dssv[i];
    var trString = `<tr> 
         <td>${data.ma}</td>
         <td>${data.ten}</td>
         <td>${data.email}</td>
         <td>${data.tinhDTB()}</td>
         <td> 
         <button onclick="xoaSv('${
           data.ma
         }')" class="btn btn-danger">Xóa</button>
         
         <button onclick="suaSv('${
           data.ma
         }')"class="btn btn-warning">Sửa</button></td>
         
         
        </tr>`;
    contentHTML = contentHTML + trString;
  }

  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
//
