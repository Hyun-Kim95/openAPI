$(document).ready(function(){
	
	$.ajax({
		
		// ajax 옵션 설정
		url:"http://apis.data.go.kr/B552061/jaywalking/getRestJaywalking?serviceKey=Uj7JHVlaJcD5DBtPQECFGH6tf1vBmpRshO6aEpIULQ7qrQ%2FCZiiycs6W6O1AV9pRmCPCiNBrc5SjUQAzqAVjeQ%3D%3D&searchYearCd=2017&siDo=11&guGun=680&type=json&numOfRows=10&pageNo=1",
		type:"GET",
		dataType:"json",
		
		// 요청이 성공시 할 일 처리
		success:function(data){
			console.log(data.items.item)

			// 할 일 처리
			let api_data = "";
			$.each(data.items.item, function(key, value){
				
				api_data += "<tr>"
				api_data += "<td>" + key + "</td>"
				api_data += "<td>" + value.sido_sgg_nm + "</td>"
				api_data += "<td>" + value.spot_nm + "</td>"
				api_data += "<td>" + value.sl_dnv_cnt + "</td>"
				api_data += "<td>" + value.se_dnv_cnt + "</td>"
				api_data += "<td>" + value.dth_dnv_cnt + "</td>"
				api_data += "</tr>"
			})
			// 페이지단에 붙이기
			$('#api_table').append(api_data)
		}
	})
})