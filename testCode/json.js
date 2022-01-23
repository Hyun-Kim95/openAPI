window.onload = () => {

  document.getElementById('btn').addEventListener( 'click', function() {

    console.log('test..')
    // ---------------------------------------------------------------
    let json = {
      "book":[{
        "isbn":"123-456-789",
        "author":{
          "name":"홍길동",
          "email":"hong@hongkildong.com"
        },
        "editor":{
          "name":"이순신",
          "email":"lee@leesoonsin.com"
        },
        "title":"대한민국의 정의는 죽었는가?",
        "category":[ 
          "Non-Fiction", "IT", "Politics" 
        ],
        "picture":"images/joe.jpg",
        "description":"백두산 저자의 야심찬 신작!절찬리에 판매중~",
        "comments":[{
          "id":"정인봉",
          "text":"정의에 대해서 알 것 같습니다."
        },
        {
          "id":"김진경",
          "text":"무거운 주제를 무겁지 않게 써주셔서 감사합니다."
        },
        {
          "id":"홍수범",
          "text":"책 산날 제일 많이 읽었어요..ㅋㅋ"
        },
        {
          "id":"이정길",
          "text":"2권은 없나요? 또 쓰시면 또 구매할게요~"
        },
        {
          "id":"한상국",
          "text":"이벤트 때문에 구매했지만 없었어도 구매할 것 같습니다."
        },
        {
          "id":"유명준",
          "text":"너무 잘 읽었습니다. 감사합니다."
        },
        {
          "id":"신재원",
          "text":"대학생이라면 필독서~"
        }],
        "comwinner":["김진경","이정길","신재원"],
        "add1":false,
        "add2":true
      }]
    }
    json = json["book"];
    console.log(json.length)  // 1
    console.log(json)
    console.log(json.isbn)    // undefined -> 배열이라 인덱스를 알려줘야 함
    console.log(json[0].isbn) // 123-456-789
    console.log(json[0].comments[(json[0].comments.length - 1)])  // comments의 마지막 인덱스 출력, -1 안됨

    console.log('------------------------------------------------------')
    for(let i=0; i<json.length; i++){
      console.log(json[i].comments)
      console.log(json[i].comwinner)
    }

    console.log('------------------------------------------------------')
    for(let i=0; i<json.length; i++){
      // ul 태그 노드 생성
      let ul = document.createElement('ul')

      // 리스트에 붙이기
      let bookList = document.getElementById('bookList')
      bookList.appendChild(ul)

      for(let j=0; j<json[i].comments.length;j++){
        // 댓글 참가자
        let bookComments = json[i].comments[j]
        console.log(bookComments.id + " : " + bookComments.text)
        // ###########################################################
        // li 태그 노드 생성
        let li = document.createElement('li')

        // 텍스트 노드 생성
        let txtNode = document.createTextNode(bookComments.id + " : " + bookComments.text)
        li.appendChild(txtNode)
        ul.appendChild(li)

        // ###########################################################
      }
      // 당첨자
      console.log(json[i].comwinner.join(", "));  // join 사용하면 문자열로 됨
      
      document.getElementById('bookListWinner').innerHTML = json[i].comwinner.join(", ")
    }
    // ---------------------------------------------------------------
  })
}