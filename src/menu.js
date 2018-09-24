var $window = $(window);
var $year = $('#js-year');
var $month = $('#js-month');
var $tbody = $('#js-calendar-body');

var today = new Date();
var currentYear = today.getFullYear(),
    currentMonth = today.getMonth();
    

$window.on('load',function(){
  calendarHeading(currentYear, currentMonth);
  calendarBody(currentYear, currentMonth, today);
});

function calendarBody(year, month, today){
  var todayYMFlag = today.getFullYear() === year && today.getMonth() === month ? true : false; // �{���̔N�ƌ����\�������J�����_�[�Ɠ���������
  var startDate = new Date(year, month, 1); // ���̌��̍ŏ��̓��̏��
  var endDate  = new Date(year, month + 1 , 0); // ���̌��̍Ō�̓��̏��
  var startDay = startDate.getDay();// ���̌��̍ŏ��̓��̗j�����擾
  var endDay = endDate.getDate();// ���̌��̍Ō�̓��̗j�����擾
  var textSkip = true; // ���ɂ��𖄂߂�p�̃t���O
  var textDate = 1; // ���t(���ꂪ�J�E���g�A�b�v����܂�)
  var tableBody =''; // �e�[�u����HTML���i�[����ϐ�
  
  for (var row = 0; row < 6; row++){
    var tr = '<tr>';
    
    for (var col = 0; col < 7; col++) {
      if (row === 0 && startDay === col){
        textSkip = false;
      }
      if (textDate > endDay) {
        textSkip = true;
      }
      var addClass = todayYMFlag && textDate === today.getDate() ? 'is-today' : '';
      var textTd = textSkip ? ' ' : textDate++;
      var td = '<td class="is-day '+addClass+'">'+textTd+'</td>';
      tr += td;
    }
    tr += '</tr>';
    tableBody += tr;
  }
  $tbody.html(tableBody);
}

function calendarHeading(year, month){
  $year.text(year);
  $month.text(month + 1);
}