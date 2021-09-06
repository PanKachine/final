// JavaScript Document
var colorArr = ['rgba(255,235,205,0)', 'rgba(255,240,245,0)', 'rgba(255,211,155,0)'];
var problemList = [
    [
        ' 1.对“毕竟西湖六月中”的“毕竟″解释正确的是( )',
        [
            {
                'selectAnswer': 'A.了结 ',
                'selectScore': '0',
                'name': 'Q1',
                'value': '1'
            },
            {
                'selectAnswer': 'B.到底',
                'selectScore': '5',
                'name': 'Q1',
                'value': '2'
            },
            {
                'selectAnswer': 'C.必定',
                'selectScore': '0',
                'name': 'Q1',
                'value': '3'
            },
            {
                'selectAnswer': 'D.坚持',
                'selectScore': '0',
                'name': 'Q1',
                'value': '4'
            }
        ]
    ],
    [
        '2.下面对这首诗的理解,不正确的一项是（）',
        [
            {
                'selectAnswer': 'A.这首诗写的是六月里黄昏西湖的美丽景色。',
                'selectScore': '5',
                'name': 'Q2',
                'value': '1'
            },
            {
                'selectAnswer': 'B.送别诗一般都是抒发诗人送别之情的,这首诗却以写景代替送人,构思别致。',
                'selectScore': '0',
                'name': 'Q2',
                'value': '2'
            },
            {
                'selectAnswer': 'C.诗中的“莲”“荷″指的是同一事物,诗人把二字错开使用,是为了避免重复。',
                'selectScore': '0',
                'name': 'Q2',
                'value': '3'
            },
            {
                'selectAnswer': 'D.这首诗从大处着笔,着力渲染,描绘了一幅天空日丽、红碧交辉的彩色画面。',
                'selectScore': '0',
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
                'selectAnswer': 'B.故人西辞黄鹤楼，烟花三月下扬州',
                'selectScore': '0',
                'name': 'Q3',
                'value': '2'
            },
            {
                'selectAnswer': 'C.“海内存知已，天涯若比邻',
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