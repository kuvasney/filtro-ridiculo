// ITENS DO FILTRO
const itens = [
    {
        image: 'https://picsum.photos/200',
        category: 'Webinar 1',
        type: 'Lorem Ipsumt',
        maintitle: 'Incluídos em sua associação',
        text: 'Pleasure to use so that so-called “iPad killer”, in conclusion Android is fragmented, but while Jony Ive’s incredible design, for this reason Steve Jobs was a genius.',
        link: 'http://foo.cm'
    },
    {
        image: 'https://picsum.photos/200',
        category: 'Outra Categoria 2',
        type: 'Trollem ipsum',
        maintitle: 'Having trouble finding the right words? Let trollem ipsum help you out!',
        text: 'CrackBerry, immediately delay in getting Ice Cream Sandwich I would say that Flash sucks, moreover awful user experience, when profit owing to Apple will only get better.',
        link: 'http://foo2.cm'
    },
    {
        image: 'https://picsum.photos/200',
        category: 'Links 3',
        type: 'Lorem Ipsumt',
        maintitle: 'Android geek why Flash sucks eventually so-called “iPad killer”',
        text: 'Gorgeous, as well as battery life but also MacBook Air is just beautiful however Steve Jobs was a genius, especially awful user experience overall genius, owing to Android is fragmented.',
        link: 'http://lipsum.com'
    },
    {
        image: 'https://picsum.photos/200',
        category: 'Webinar 1',
        type: 'Trollem ipsum',
        maintitle: 'Android geek why Flash sucks',
        text: 'Gorgeous, as well as battery life but also MacBook Air is just beautiful however Steve Jobs was a genius, especially awful user experience overall genius, owing to Android is fragmented.',
        link: 'http://lipsum.com'
    },
    {
        image: 'https://picsum.photos/200',
        category: 'Outra Categoria 2',
        type: 'Trollem ipsum',
        maintitle: 'Let trollem ipsum help you out!',
        text: 'CrackBerry, immediately delay in getting Ice Cream Sandwich.',
        link: 'http://foo2.cm'
    }, 
    {
        image: 'https://picsum.photos/200',
        category: 'Webinar 1',
        type: 'Trollem ipsum',
        maintitle: 'Afrima is playing',
        text: 'And it\'s gonna take some time.',
        link: 'http://lipsum.com'
    },
];

// SETUP DOS ITENS
const itensSpecs = {
    width: 20
}

function filter() {
    // LIMPAR OS ITENS EXIBIDOS PARA REMONTAR CASO NECESSÁRIO
    document.querySelector('.filter__itens').innerHTML = '';

    let categories = [];
    let types = [];
    let filteredItens = [];
    let categoriesFilter = document.querySelector('#category').value;
    let typesFilter = document.querySelector('#type').value;
    
    // SE O FILTRO DE CATEGORIA TROUXER ALGUMA CATEGORIA, DEVO FILTRAR
    if (categoriesFilter !== '0') {
        filteredItens = itens.filter(function(item){
            return item.category == categoriesFilter
        })
    // SE O FILTRO DE CATEGORIA NÃO TROUXER NENHUMA CATEGORIA, DEVO MANTER ELE COMO FOI CRIADO
    } else {
        filteredItens = itens
    }
    
    // SE O FILTRO DE TIPOS TROUXER ALGUMA CATEGORIA, DEVO FILTRAR O QUE JÁ VEIO FILTRADO ANTES
    if (typesFilter !== '0') {
        filteredItens = filteredItens.filter(function (item) {
            return item.type == typesFilter
        })
    }    

    // PERCORRO OS ITENS JÁ FILTRADOS
    if (filteredItens.length > 0) {
        filteredItens.forEach(function(item) {
            document.querySelector('.filter__itens').innerHTML += `<li style="width:${itensSpecs.width}vw">
                <div class="img>
                    <a href="${item.link}">
                        <img src="${item.image}" alt="${item.maintitle}">
                    </a>
                </div>
                <div class="content">
                    <span class="category">
                        ${item.category}
                    </span>
                    <p class="type">
                        ${item.type}
                    </p>
                    <a href="${item.link}">
                        <h3>${item.maintitle}</h3>
                    </a>
                    <a href="${item.link}">
                        <p>${item.text}</p>
                    </a>
                </div>
            </li>`;            
        })        
    } else {
        document.querySelector('.filter__itens').innerHTML = `<li>Sua busca não retornou resultados</li>`
    }
    
    // PERCORRO OS ITENS ORIGINAIS PARA CRIAR OS FILTROS
    itens.forEach(function(item){
        categories.push(item.category)
        types.push(item.type)
    })

    // REMOVE DUPLICIDADES DO ARRAY DE FILTROS
    categories = [...new Set(categories)];
    types = [...new Set(types)];
    
    // PREENCHE O SELECT DE CATEGORIAS
    let typesOption;
    let categoriesOptions;
    categories.forEach(function(cat) {
        categoriesOptions += `<option value="${cat}">${cat}</option>`
    })
    
    // PREENCHE O SELECT DE TIPOS
    types.forEach(function (type) {
        typesOption += `<option value="${type}">${type}</option>`
    })
    
    // PRECISO LIMPAR E RECRIAR AS OPCOES DO SELECT COM A OPCAO '0' INCLUSA. É UMA GAMBIARRA FANTASTICA, ADMITA
    document.querySelector('#category').innerHTML = `<option value="0">Selecione</option> ${categoriesOptions}`
    document.querySelector('#type').innerHTML = `<option value="0">Selecione</option> ${typesOption}`
}

filter();