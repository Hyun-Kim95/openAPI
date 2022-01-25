$(document).ready(function(){

  $.getJSON("exam_001.json", function(data){

    // 할 일 처리
    let member_date = ""
    $.each(data, function(key, value){  // key : 인덱스, value : 객체
      member_date += "<tr>"
      member_date += "<td>" + value.id + "</td>"
      member_date += "<td>" + value.name + "</td>"
      member_date += "<td>" + value.age + "</td>"
      member_date += "<td>" + value.address + "</td>"
      member_date += "<td>" + value.gender + "</td>"
      member_date += "<td>" + value.job + "</td>"
      member_date += "<td>" + value.hobby + "</td>"
      member_date += "</tr>"
    })
    // table의 body에 붙여짐(tbody)
    $("#member_table").append(member_date);
  })
})