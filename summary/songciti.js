var colorArr = ['rgba(255,235,205,0)', 'rgba(255,240,245,0)', 'rgba(255,211,155,0)'];
var problemList = [
    [
        ' 1.上阙中所描写的风景有什么共同的特点？（）',
        [
            {
                'selectAnswer': 'A.空阔辽远 ',
                'selectScore': '5',
                'name': 'Q1',
                'value': '1'
            },
            {
                'selectAnswer': 'B.凄冷寂静',
                'selectScore': '0',
                'name': 'Q1',
                'value': '2'
            },
            {
                'selectAnswer': 'C.艳丽怡人 ',
                'selectScore': '0',
                'name': 'Q1',
                'value': '3'
            },
            {
                'selectAnswer': 'D.风和日丽',
                'selectScore': '0',
                'name': 'Q1',
                'value': '4'
            }
        ]
    ],
    [
        '2.词的下阕表达了作者什么样的情感？（）',
        [
            {
                'selectAnswer': 'A.对人生聚少离多的伤感',
                'selectScore': '0',
                'name': 'Q2',
                'value': '1'
            },
            {
                'selectAnswer': 'B.对热衷于功名利禄者的抨击',
                'selectScore': '0',
                'name': 'Q2',
                'value': '2'
            },
            {
                'selectAnswer': 'C.对羁留异地的愁苦',
                'selectScore': '0',
                'name': 'Q2',
                'value': '3'
            },
            {
                'selectAnswer': 'D.以上说法全都正确',
                'selectScore': '5',
                'name': 'Q2',
                'value': '4'
            }
        ]
    ],

    [
        '3.下列诗句中与本诗表达的情感不同的是（）',
        [
            {
                'selectAnswer': 'A.桃花潭水深千尺，不及汪伦送我情。',
                'selectScore': '0',
                'name': 'Q3',
                'value': '1'
            },
            {
                'selectAnswer': 'B.故人西辞黄鹤楼，烟花三月下扬州。',
                'selectScore': '0',
                'name': 'Q3',
                'value': '2'
            },
            {
                'selectAnswer': 'C.海内存知已，天涯若比邻',
                'selectScore': '0',
                'name': 'Q3',
                'value': '3'
            },
            {
                'selectAnswer': 'D.遥知兄弟登高处，遍插茱萸少一人。',
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
