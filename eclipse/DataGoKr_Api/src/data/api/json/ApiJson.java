package data.api.json;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class ApiJson {

	public static void main(String[] args) {

		// ���� �̿� : BufferdReader -> ���۸� �̿��ؼ� �а� ���� �Լ�
		// ����(Buffer) : ����� �ӵ� ����� ���ؼ� �����͸� �Ͻ������� �޸� ������ �� ���� ��Ƶδ� ��
		// ���� ���� : ���۸� �̿��ϱ� ������ ����� ���� ó���۾��� �ſ� ������ �� �� �ִ�.
		BufferedReader br = null;
		try {
			// ����API ����Ű �� ��ü Ǯ �ּ�
			// ������ ���� ���� �־ �ּ� ü�踦 ������ �Ѵٸ� -> StringBuilder�� ���
			// String: �Һ�(immutable)���� �����Ƿ� ���ڿ��� ���� �� �Ź� ���ο� ��ü�� �����ؼ� �����ϴ� ��� -> �� ���� X
			// StringBuilder : ���ڿ��� ���� ���� �� ���ο� ��ü�� �Ź� �����ϴ� ���� �ƴ϶� ���� ������ ���� �߰��ذ��� ���, �ӵ��� ����
			//				 : mutable �Ӽ�, append(), insert(), delete() ���� ����ؼ� ���� ����
			// ���� ����API ��� -> StringBuilder ���
			String urlStr = "http://apis.data.go.kr/B552061/jaywalking/getRestJaywalking?serviceKey=Uj7JHVlaJcD5DBtPQECFGH6tf1vBmpRshO6aEpIULQ7qrQ%2FCZiiycs6W6O1AV9pRmCPCiNBrc5SjUQAzqAVjeQ%3D%3D&searchYearCd=2017&siDo=11&guGun=680&type=json&numOfRows=10&pageNo=1";
			
			// URL Ŭ������ ��ü ���� -> 2���� ���: ������, �����
			URL url = new URL(urlStr);
			
			// openConnection() �޼��带 �̿��� ����
			// URL �ּ��� ���� ��ü�� ������ �� -> ����� �� �ִ� URLConnection ��ü ����
			HttpURLConnection urlConn = (HttpURLConnection)url.openConnection();
			urlConn.setRequestMethod("GET");
			urlConn.setRequestProperty("Content-type", "application/json");
			System.out.println("Response code : " + urlConn.getResponseCode()); // 200�� ���;� ����
			
			// InputStreamReader Ŭ������ �б�
			// BufferedReader �� InputStreamReader�� ��ü�� �Է°����� ���
			br = new BufferedReader(new InputStreamReader(urlConn.getInputStream(), "UTF-8"));
			
			// ��� ����
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
			
			// ���� ����
			br.close();
			urlConn.disconnect();
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}
}