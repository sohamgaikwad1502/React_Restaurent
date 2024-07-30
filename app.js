

// const heading = React.createElement('h1',{className  : "heading"},"Hello World!");
// console.log(heading);

const parent = 
    React.createElement('div',{id:'parent'},[
        [
            React.createElement('div',{id:'Parent1'},
            React.createElement('h1',{id:'child1'},"Sibling1"),React.createElement('h2',{id:'child1'},"Sibling2"))
        ],

        [
            React.createElement('div',{id:'Parent2'},
            React.createElement('h1',{id:'child2'},"Sibling1"),React.createElement('h2',{id:'child1'},"Sibling2"))
        ]
    ]

);

// const child2 = 
// ) 

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(parent);
console.log(parent);