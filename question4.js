/*question 4:

Let’s see we an api url https://my-json-server.typicode.com/typicode/demo/posts
Write a sample code to call this rest api and display the result.

Answer: 

Description:
Here we used the state to capture the changes happened to the data. componentDidMount() function to fetch the data and then we store it to json format.
We use map to iterate over the array of objects recieved from the api and using list tags we display the result finally.*/


import React from 'react';

class App extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    componentDidMount() {

        fetch('https://my-json-server.typicode.com/typicode/demo/posts')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Title : {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default App;
