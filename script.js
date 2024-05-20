function create_tr() {
    var tr_ele = document.createElement("tr");
    return tr_ele;
}

function create_th(tagname, classname, value, content) {
    var th_ele = document.createElement(tagname);
    th_ele.setAttribute(classname, value);
    th_ele.innerHTML = content;
    return th_ele;
}


function create_td(tagname, content) {
    var td_ele = document.createElement(tagname);
    td_ele.innerHTML = content;
    return td_ele;
}

function table_data(start, end) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    request.send();
    request.onload = function () {
        var res = JSON.parse(request.response);
        var x = tbody.children.length
        if (x !== 0) {
            for (var i = 0; i < x; i++) {
                tbody.deleteRow(0);
            }
        }
        for (var i = start; i <= end; i++) {

            var x = res[i].id;
            var y = res[i].name;
            var z = res[i].email;
            var tbody_tr = create_tr();
            var td1 = create_th("th", "scope", "row", x);
            var td2 = create_td("td", y);
            var td3 = create_td("td", z);
            tbody_tr.append(td1, td2, td3);
            tbody.append(tbody_tr);
        }

    }
}
var table = document.createElement("table");
table.className = "table table-striped";

var thead = document.createElement("thead");
thead.className = "thead-dark";
var thead_tr = create_tr();
var th1 = create_th("th", "scope", "col", "ID");
var th2 = create_th("th", "scope", "col", "Name");
var th3 = create_th("th", "scope", "col", "Email");
thead_tr.append(th1, th2, th3);
thead.append(thead_tr);

var tbody = document.createElement("tbody");


var parent_div = document.createElement("div");
parent_div.className = "main";


table.append(thead, tbody);
parent_div.append(table);
document.body.append(parent_div);

create_button();



function create_button() {
    var button_div = document.createElement("div");
    button_div.className = "main1";
    var button1 = document.createElement("button");
    button1.setAttribute("type", "button");
    button1.id = "but1";
    button1.innerHTML = "1";


    var button2 = document.createElement("button");
    button2.setAttribute("type", "button");
    button2.id = "but2";
    button2.innerHTML = "2";

    var button3 = document.createElement("button");
    button3.setAttribute("type", "button");
    button3.id = "but3";
    button3.innerHTML = "3";

    var button4 = document.createElement("button");
    button4.setAttribute("type", "button");
    button4.id = "but4";
    button4.innerHTML = "4";

    var button5 = document.createElement("button");
    button5.setAttribute("type", "button");
    button5.id = "but5";
    button5.innerHTML = "5";

    var button6 = document.createElement("button");
    button6.setAttribute("type", "button");
    button6.id = "but6";
    button6.innerHTML = "6";

    var button7 = document.createElement("button");
    button7.setAttribute("type", "button");
    button7.id = "but7";
    button7.innerHTML = "7";

    var button8 = document.createElement("button");
    button8.setAttribute("type", "button");
    button8.id = "but8";
    button8.innerHTML = "8";

    var button9 = document.createElement("button");
    button9.setAttribute("type", "button");
    button9.id = "but9";
    button9.innerHTML = "9";

    var button10 = document.createElement("button");
    button10.setAttribute("type", "button");
    button10.id = "but10";
    button10.innerHTML = "10";
    button1.addEventListener("click", table_data(0, 9));

    button1.addEventListener("click", (elmnt) => {
        
        elmnt.onclick = table_data(0, 9)
    });
    button2.addEventListener("click", (elmnt) => {

        elmnt.onclick = table_data(10, 19)
    });
    button3.addEventListener("click", (elmnt) => {

        elmnt.onclick = table_data(20, 29)
    });
    button4.addEventListener("click", (elmnt) => {

        elmnt.onclick = table_data(30, 39)
    });
    button5.addEventListener("click", (elmnt) => {

        elmnt.onclick = table_data(40, 49)
    });
    button6.addEventListener("click", (elmnt) => {

        elmnt.onclick = table_data(50, 59)
    });
    button7.addEventListener("click", (elmnt) => {

        elmnt.onclick = table_data(60, 69)
    });
    button8.addEventListener("click", (elmnt) => {

        elmnt.onclick = table_data(70, 79)
    });
    button9.addEventListener("click", (elmnt) => {

        elmnt.onclick = table_data(80, 89)
    });
    button10.addEventListener("click", (elmnt) => {

        elmnt.onclick = table_data(90, 99)
    });


    button_div.append(button1, button2, button3, button4, button5,
        button6, button7, button8, button9, button10);
    document.body.append(button_div);

}
