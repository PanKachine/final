// JavaScript Document
var colorArr = ['rgba(255,235,205,0)', 'rgba(255,240,245,0)', 'rgba(255,211,155,0)'];
var problemList = [
  [
    ' 1.下面对这首诗的赏析，不正确的一项是( )',
    [
      {
        'selectAnswer': 'A.首联的“扫”字体现出山风的强劲，山风既带来了“秋寒＂，也留下了澄碧的夜空。 ',
        'selectScore': '0',
        'name': 'Q1',
        'value': '1'
      },
      {
        'selectAnswer': 'B.诗人善于观察，抓住山间溪边轻烟的色泽和形态特点，营造出一幅迷蒙梦幻的画面。',
        'selectScore': '0',
        'name': 'Q1',
        'value': '2'
      },
      {
        'selectAnswer': 'C.“ 银湾”指银河，它以皎皎 的光辉照亮了夜空，又像一湾流水闪 耀着波光向东方倾泻。 ',
        'selectScore': '5',
        'name': 'Q1',
        'value': '3'
      },
      {
        'selectAnswer': 'D.如龙一样婉蜓盘旋的险峻山势使前文轻快的笔调为之一转，“苦篡”更增添了凄厉之感。',
        'selectScore': '0',
        'name': 'Q1',
        'value': '4'
      }
    ]
  ],
  [
    '2.全诗是如何运用多种手法来展现秋夜的幽静（）',
    [
      {
        'selectAnswer': 'A.以动衬静。白狐对月的呼号和苦竹临风的幽鸣都以柔和的自然之声衬托出溪边的宁静。',
        'selectScore': '0',
        'name': 'Q2',
        'value': '1'
      },
      {
        'selectAnswer': 'B渲染夜晚宁静的意境。',
        'selectScore': '0',
        'name': 'Q2',
        'value': '2'
      },
      {
        'selectAnswer': 'C.在静夜里，溪水也善解人意地“不语”，而是缓缓流淌。苦竹则对着山间的客人吟唱起笛箫般悠长的调子。',
        'selectScore': '5',
        'name': 'Q2',
        'value': '3'
      },
      {
        'selectAnswer': 'D.颈联中诗人想象白鹭沉浸在睡梦中，正梦见了征鸿。唤起了读者的生活经验，由眠鹭酣梦之深感受到溪边的寂静。',
        'selectScore': '0',
        'name': 'Q2',
        'value': '4'
      }
    ]
  ],
  [
    '3.作者在诗中运用了哪些写作技巧？请结合诗句简要分析（）',
    [
      {
        'selectAnswer': 'A.运用了拟人的修辞手法。诗中第五句，用“娇啼”一词，让挂着露珠的秋花，有了女性娇滴滴哭泣的特点，增添一种忧伤之感。',
        'selectScore': '0',
        'name': 'Q3',
        'value': '1'
      },
      {
        'selectAnswer': 'B.诗中第九句把鬼火比喻成墓中的漆灯，花朵似的点缀着森林。',
        'selectScore': '0',
        'name': 'Q3',
        'value': '2'
      },
      {
        'selectAnswer': 'C.“秋风白”“冷红”是从触觉方面来写，“池塘”“云”“苔藓”“花”“稻“蛰萤”“鬼灯”是从视觉方面来写',
        'selectScore': '0',
        'name': 'Q3',
        'value': '3'
      },
      {
        'selectAnswer': 'D.“冷红“运用了通感，视觉通触觉。多种感官结合使得诗中意境清新而又冷凄。',
        'selectScore': '5',
        'name': 'Q3',
        'value': '4'
      }
    ]
  ],

]
var correctData = [3, 3, 4];//正确题目的序号
var answerArr = [];//存储回答的答案
var scoreArr = [];//存储回答的分数数组
var score = null;//分数
//问题列表渲染
function renderProblem(problemList) {
  var template = '';
  for (var i = 0; i < problemList.length; i++) {
    template += " <li class='testItem'>" +
      "<div class='problem'>" + problemList[i][0] + "</div>" +
      "<div class='selectItem'>";
    for (var j = 0; j < problemList[i][1].length; j++) {
      template += " <div><input type='radio' name='" + problemList[i][1][j].name + "' value='" + problemList[i][1][j].value + "' data-score='" + problemList[i][1][j].selectScore + "'><span>" + problemList[i][1][j].selectAnswer + "</span></div>"
    }
    template += "</div></li>"
  }
  $('.testContent').append(template)
}
renderProblem(problemList);//渲染列表
var list_node = document.getElementsByTagName('li');
for (let i = 0; i < list_node.length; i++) {
  list_node[i].style.backgroundColor = colorArr[i % colorArr.length];
  list_node[i].onclick = function (e) {//点击选择答案
    if (e.target.tagName == 'INPUT') {
      answerArr = [];
      scoreArr = [];

    }
  }
}
//倒计时的插件
//$('#countdown-11').timeTo({
//  seconds: 1800,
//  displayHours: false
//});
//
//$('#clock-w-step-cb').timeTo({
//  step: function () {
//    console.log('Executing every 3 ticks');
//  },
//  stepCount: 3
//});
//提交执行的方法
function submitAnswer() {
  $("input[type='radio']:checked").each(function () {
    answerArr.push(Number($(this).val()));
    // scoreArr.push()
    scoreArr.push(Number($(this)[0].dataset.score))
  });
  for (var i = 0; i < scoreArr.length; i++) {
    score += scoreArr[i]
  }
  console.log(score)
  console.log(answerArr.length)
  if (answerArr.length == correctData.length) {
    if (JSON.stringify(answerArr) === JSON.stringify(correctData)) {
      alert('完全正确，得分为：' + score)
    } else {

      alert('继续努力，得分为：' + score)
    }
    location.reload();
  } else {
    alert('请提交完整的答题')
  }
}
