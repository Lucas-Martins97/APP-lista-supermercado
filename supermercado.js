var itens = [];

document.querySelector('input[type=submit').addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=valor_produto]');
    
    itens.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    })
    let listaProduto = document.querySelector('.lista-produtos');
    let total = 0;
    // let valorTotal = document.querySelector('.total')
    listaProduto.innerHTML = "";
    itens.map((val)=>{
        total+= parseFloat(val.valor);
        listaProduto.innerHTML+=
        `
            <div class="lista-produtos-single">
            <h3>`+val.nome+`</h3>
            <h4 class="preco"><span>`+"R$ "+val.valor+`</span></h4>
        </div>
        `
    })
    total = total.toFixed(2)
    nomeProduto.value="";
    precoProduto.value="";
    let precoFinal = document.querySelector('.total');
    precoFinal.innerHTML= `<h2><span> Total: R$ `+total+`</span></h2>` ;


})

document.querySelector('button[name=limpar]').addEventListener('click',()=>{
itens=[];
document.querySelector('.lista-produtos').innerHTML='';
document.querySelector('.total h2').innerHTML=`<h2><span> Total: R$ 0</span></h2>`;
})

