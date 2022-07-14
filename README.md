# web-todo-1

페어 프로그래밍으로 진행

- 레이아웃 
  - 헤더의 좌측에 서비스명과 우측 메뉴버튼(`flex-between`)
  - 기본 3가지 칼럼이 있다.  
    - 각 칼럼의 타이틀 옆에는 카드의 갯수를 카운팅하여 표시한다. (`숫자를 세는 상태 필요`)
    - 최신순으로 정렬(`처음에만 array sort`)

- 메뉴 
  - 메뉴를 누르면 레어가 나옴 애니메이션 효과 있어야함 (`css translate-x`)
  - x 버튼을 클릭하면 다시 오른쪽 방향으로 레이어가 숨겨진다. 
  - 사용자 액션이 위에서부터 최신순으로 표현된다. 새로고침되면 사라짐 (`stack 자료구조`)
  - 기록이 많아지면 오른쪽 스크롤 표시(`overflow-scroll`)
  - 4가지 액션이 있다. (등록add,삭제remove,변경 update,이동 move) (`post,delete,patch`)
  - 액션에 대한 시간 저장한후 보여질 때 계산(`Date?`)
  - 액션의 중요 키워드는  디자인에 변경을 줘서 (`strong`)을 준다. 


- 새로운 카드 등록 
  - 칼럼 타이틀 옆의 + 버튼에 호버시 색상 변경 (`css`)
  - 클릭하면 새로운 카드 등록할 수 있는 박스 나온다. (`innerHTML`)
  - +를 다시 누르거나 취소 버튼을 누르면 박스가 사라진다.(`innerHTML로 생성한 DOM을 기억하고 있다가 사라지게 한다.`)
  - 플레이스 홀더에는 가각 제목을 입력하세요, 내용을 입력하세요 
  - 내용을 입력하면 등록버튼이 활성화된다. 제목 내용 둘다 써야한다. (`input event`)
  - 등록 후 새로운 카드가 등록되고 카드를 등록할 수 있는 박스는 사라진다. (`post 요청`)
  - 글자수 제한은 500자 제한 , 글의 깊이에 맞춰 박스가 아래로 늘어나야한다. (`maxlength, minHeight:auto???`)
  - author by we으로 사람 작성자 이름 넣기

- 카드 이동
  - 같은 칼럼 뿐 아니라 다른 칼럼으로도 드래그앤드랍으로 이동할 수 있다.()
  - 드래그시 원래 카드가 있던 자리에 잔상이 생긴다. 
  - 이동경로의 절반 정도가 되면 카드의 예정 목적지로 카드의 잔상이 먼저 이동한다. 
  - 이동 후, 드래그를 중단하면 카드는 잔상에 있던 위치로 이동하며 잔상은 사라진다. 
  - 이동되는 카드는 살짝 반투명해진다. 
  
- 카드 삭제 
  - 칼럼 타이틀의 X 버튼 누를 때 빨간색으로 변경되지만 클릭 했을 때 아무 반응 없어야함 (`click 이벤트 없음`)
  - 카드의 x버튼에 마우스를 올리면 이미지와 같이 카드가 빨갛게 변한다. (`hover`)
  - 카드의 X버튼을 누르면 알럿창이 뜬다. (`modal 창 구현`) 취소는 닫히고, 삭제버튼은 닫히면서 삭제가 된다. 

카드 수정 
- 카드는 **더블 클릭**시 등록박스와 동일한 스타일로 전환되며 수정이 가능해진다. 
- 취소를 누르면 변경사항이 반영되지 않고 수정이 취소된다. 
- 내용을 모두 삭제하면 수정 버튼이 비활성화 되며(`input event`) 내용을 수정한 후 수정버튼을 누르면 변경사항이 반영된 카드로 바뀐다.(`기존 값을 상태로 가지고 있어야한다.`)

추가 선택 기능
- 타이틀을 더블 클릭하면 수정이 가능하도록 한다 
- 글자 수 제한은 50자까지
- 텍스트 필드 외의 다른 곳을 클릭하면 수정사항이 반영된다. 

- 우측 하단에 FAB 버튼을 눌러 칼럼이 추가될 수 있다. 자세한 기획은 스스로 정해서 칼럼이 추가 삭제될 수 있도록 해본다. 


  
