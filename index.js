
const $true_area = document.getElementById("true_area");
const $false_area = document.getElementById('false_area');
const $true_btn = document.getElementById('true_btn');
const $false_btn = document.getElementById('false_btn');

$true_btn.addEventListener('click', function(){
    icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    $true_area.appendChild(icon);
},false);

$false_btn.addEventListener('click', function(){  
    icon = document.createElement('span');
    icon.setAttribute("class", "icon");
    $false_area.appendChild(icon);
},false);



// createElementは、引数に書かれた要素を作成する    const element = document.createElement(タグ名)
// setAttributeは、引数の属性名に属性値をセットする   setAttribute("属性名","属性値")
// appendChildは、特定の親ノードの子ノードの最後にノードを追加することができる   HTML要素.appendChild(生成した要素)

// for ([初期化式]; [条件式]; [加算式])     
// for ( カウンタ変数定義と初期化 ; 繰り返し回数の指定 ; カウンタ加算幅 ) { 実際に実行する処理}
 