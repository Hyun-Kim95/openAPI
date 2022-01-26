package data.api.json;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ApiJson {

	public static void main(String[] args) {

		// 버퍼 이용 : BufferedReader -> 버퍼를 이용해서 읽고 쓰는 함수
		// 버퍼(Buffer) : 입출력 속도 향상을 위해서 데이터를 일시적으로 메모리 영역의 한 곳에 모아두는 것
		// 버퍼 장점 : 버퍼를 이용하기 때문에 입출력 관련 처리작업을 매우 빠르게 할 수 있다.
		BufferedReader br = null;
		try {
			// 공공API 인증키 및 전체 풀 주소
			// 변수에 여러 값을 넣어서 주소 체계를 만들어야 한다면 -> StringBuilder를 사용
			// String: 불변(immutable)성을 가지므로 문자열을 더할 때 매번 새로운 객체를 생성해서 참조하는 방식 -> 값 변경 X
			// StringBuilder : 문자열을 더해 나갈 때 새로운 객체를 매번 생성하는 것이 아니라 기존 데이터 값에 추가해가는 방식, 속도가 빠름
			//				 : mutable 속성, append(), insert(), delete() 등을 사용해서 값을 변경
			// 보통 공공API 방식 -> StringBuilder 사용
			String urlStr = "http://apis.data.go.kr/B552061/jaywalking/getRestJaywalking?serviceKey=Uj7JHVlaJcD5DBtPQECFGH6tf1vBmpRshO6aEpIULQ7qrQ%2FCZiiycs6W6O1AV9pRmCPCiNBrc5SjUQAzqAVjeQ%3D%3D&searchYearCd=2017&siDo=11&guGun=680&type=json&numOfRows=10&pageNo=1";
			
			// URL 클래스로 객체 생성 -> 2가지 방법: 절대경로, 상대경로
			URL url = new URL(urlStr);
			
			// openConnection() 메서드를 이용한 연결
			// URL 주소의 원격 객체에 접속한 뒤 -> 통신할 수 있는 URLConnection 객체 리턴
			HttpURLConnection urlConn = (HttpURLConnection)url.openConnection();
			urlConn.setRequestMethod("GET");
			urlConn.setRequestProperty("Content-type", "application/json");
			System.out.println("Response code : " + urlConn.getResponseCode()); // 200이 나와야 정상
			
			// InputStreamReader 클래스로 읽기
			// BufferedReader 는 InputStreamReader의 객체를 입력값으로 사용
			br = new BufferedReader(new InputStreamReader(urlConn.getInputStream(), "UTF-8"));
			
			// 결과 변수
			/*
			String rst = "";
			String line;
			while((line = br.readLine()) != null) {
				rst += line + "\n";
			}
			System.out.println(rst);
			*/
			
			StringBuilder sb = new StringBuilder();
			String line;
			while((line=br.readLine()) != null) {
				sb.append(line);
			}
			System.out.println(sb.toString());
			
			// 연결 해제
			br.close();
			urlConn.disconnect();
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}
}