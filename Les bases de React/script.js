const rootEl = document.getElementById('root');


const element = React.createElement('div', {
  className : 'header container',
  children : [React.createElement('h1', {}, 'Bienvenue sur le site!'),
              React.createElement('h2', {}, 'Ce site a été conçu pour :'),
              React.createElement('ul', {className : 'services', 
                                         id : 'site-services-list',
                                         children : [React.createElement('li', {}, 'Obtenir des informations sur la société'),
                                                     React.createElement('li', {}, 'Echanger avec vos collègues'),
                                                     React.createElement('li', {}, 'Vous inscrire aux afterwork qui sont organisés')
                                                    ] 
                                        }) 
             ]
})

ReactDOM.render(element, rootEl)