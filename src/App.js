function App() {
    return ( 
    < div >
        <
        Item name = "ngguyen an"
        age = "20" / >

        </div>
    );
}

function Item({ name, age }) {
    return ( 
    <>
        < h2 > { name } </h2> 
        <h2 > { age } </h2> 
     </>
    );
}

export default App;