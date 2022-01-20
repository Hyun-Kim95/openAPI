// 이걸 적어줘야 html에서 head에 스크립트를 넣어도 태그들이 다 만들어진 후에 적용됨
window.onload = () => {
  const book = {
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
      "category":[ "Non-Fiction", "IT", "Politics" ]
  }

  console.log(book["author"].name);	// 홍길동
  console.log(book["editor"].name);	// 이순신
  console.log(book["isbn"]);			// 123-456-789
  console.log(book.isbn);				// 123-456-789
  console.log(book.title);			// 대한민국의 정의는 죽었는가?
  console.log(book.category);			// ['Non-Fiction', 'IT', 'Politics']
  
  let val = ""
  val = book.category[0]
  document.getElementById("aaa").innerHTML = val;
  
  // 반복문을 이용한 엑세스
  // for
  let valu =""
  for(let i=0; i<book.category.length; i++){
      //valu += book.category[i] + "<br>"
      valu += `${book["category"][i]}<br>`
  }
  document.getElementById("bbb").innerHTML = valu;

  //for ..in
  let valuu = ""
  for(let i in book.category){
      valuu += book.category[i] + "<br>"
  }
  document.getElementById("ccc").innerHTML = valuu

  //for ..of
  let valuee = ""
  for(let va of book.category){
      valuee += va + "<br>";
  }
  document.getElementById("ddd").innerHTML = valuee
}