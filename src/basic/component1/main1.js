Vue.component('todo-item', {
  /*
   * 이제 todo-item component는 'prop'이라고 하는 사용자 정의 속성 같은 것을 입력받을 수 있습니다.
   * 이 prop은 todo라는 이름으로 정의했습니다.
   */
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans ar supposed to eat' },
    ]
  }
});