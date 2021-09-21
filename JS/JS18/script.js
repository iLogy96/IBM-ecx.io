class UseData{
    constructor(){
        this.#bindEvents();
        this.element={
            imageAlt:"Fetch",
            imageUrl:"none",
            name:"Filip Rubes",
            price:"0",
        }
    }
    getData(){
        fetch("http://as-var-croapps.ecx.local:1337/products")
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
    }
    postData(){
        fetch("http://as-var-croapps.ecx.local:1337/products",{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this.element)
        })
    }
    deleteData(){
        fetch("http://as-var-croapps.ecx.local:1337/products/14",{
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: null
        })
    }
    #bindEvents(){
        document.querySelector(".get").addEventListener("click",this.getData.bind(this));
        document.querySelector(".post").addEventListener("click",this.postData.bind(this));
        document.querySelector(".delete").addEventListener("click",this.deleteData.bind(this));
    }
}
new UseData();