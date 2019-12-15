//state = 0,1,2,3,4,5分别对应提交申请,正在审核,申请成功,拨放贷款,待还贷款,还清贷款;
let data = [
    {
        'id':'334564321234564298', 'product': '阳光贷', 'money': '150', 'company':'中粮食品有限公司', 'month':'24',
        'state':'0'
    },
    {
        'id':'755645435465787899', 'product': '易企贷', 'money': '100', 'company':'华腾科技有限公司', 'month':'24',
        'state':'0'
    },
    {
        'id':'453423435465768789', 'product': '小微贷', 'money': '200', 'company':'海英食品有限公司', 'month':'20',
        'state':'0'
    },
    {
        'id':'4342312436568769789', 'product': '商通贷', 'money': '350', 'company':'嘉里有限公司', 'month':'24',
        'state':'1'
    },
    {
        'id':'434233232469789', 'product': '易企贷', 'money': '320', 'company':'得利斯有限公司', 'month':'24',
        'state':'1'
    },
    {
        'id':'13242332469789', 'product': '阳光贷', 'money': '330', 'company':'海康有限公司', 'month':'24',
        'state':'1'
    },

    {
        'id':'64534565433457989', 'product': '小微贷', 'money': '100', 'company':'得利斯有限公司', 'month':'15',
        'state':'3'
    },
    {
        'id':'645534534657687989', 'product': '阳光贷', 'money': '100', 'company':'海康有限公司', 'month':'24',
        'state':'3'
    },
    {
        'id':'7456345463457989', 'product': '商通贷', 'money': '140', 'company':'欣邦科技有限公司', 'month':'22',
        'state':'3'
    },
    {
        'id':'645534534657687989', 'product': '阳光贷', 'money': '230', 'company':'海康有限公司', 'month':'24',
        'state':'3'
    },

    {
        'id':'655445343546457687988', 'product': '阳光贷', 'money': '300', 'company':'梁粮食品有限公司', 'month':'12',
        'state':'4'
    },
    {
        'id':'4232354654657687988', 'product': '小微贷', 'money': '100', 'company':'科腾科技有限公司', 'month':'20',
        'state':'4'
    },
    {
        'id':'86763452546565645458', 'product': '易企贷', 'money': '300', 'company':'华新科技有限公司', 'month':'23',
        'state':'4'
    },
    {
        'id':'6452341243546576856', 'product': '商通贷', 'money': '450', 'company':'欣邦科技有限公司', 'month':'28',
        'state':'5'
    },
    {
        'id':'456489789735235345', 'product': '易企贷', 'money': '200', 'company':'科腾科技有限公司', 'month':'26',
        'state':'5'
    },
    {
        'id':'3434353098786454', 'product': '商通贷', 'money': '450', 'company':'欣邦科技有限公司', 'month':'28',
        'state':'5'
    },
    {
        'id':'645545467898935', 'product': '小微贷', 'money': '100', 'company':'焦点科技有限公司', 'month':'26',
        'state':'5'
    },
];
let state = ["提交申请","正在审核","申请成功","拨放贷款","待还贷款","还清贷款"];
console.log(data);

for(let i in data){
    console.log(1);
    switch (data[i].state) {
        case '0':
            fillTable1(data[i]);
            break;
        case '1':
            fillTable(data[i]);
                break;
        case '2':
            fillTable(data[i]);
            break;
        case '3':
            fillTable(data[i]);
            break;
        case '4':
            fillTable(data[i]);
            break;
        case '5':
            fillTable(data[i]);
            break;

    }
}




function fillTable(datas){
    console.log(2);
    let content = `
        <tr>
            <td>${datas.id}</td>
            <td><a href="/loanApprovalDetails/?id=${datas.id}">${datas.product}</a></td>
            <td>${datas.money}</td>
            <td>${datas.company}</td>
            <td>${datas.month}个月</td>
            <td>
                <div class="dropdown">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                        ${state[datas.state-1]}
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#" style="text-align:center;font-size:16px">${state[datas.state]}</a>
                    </div>
                </div>
            </td>
        </tr>
    `;
    let appendclass = `.state${datas.state}`;
    $(appendclass).append(content);
}
function fillTable1(datas){
    console.log(2);
    let content = `
        <tr>
            <td>${datas.id}</td>
            <td><a href="/loanApprovalDetails/?id=${datas.id}">${datas.product}</a></td>
            <td>${datas.money}</td>
            <td>${datas.company}</td>
            <td>${datas.month}个月</td>
            <td>
                <div class="dropdown">
                    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                       提交申请
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#" style="text-align:center;font-size:16px">${state[datas.state]}</a>
                    </div>
                </div>
            </td>
        </tr>
    `;
    let appendclass = `.state${datas.state}`;
    $(appendclass).append(content);
}
//审批按钮
