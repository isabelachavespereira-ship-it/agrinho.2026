:root{
    --verde:#0b8f4f;
    --cinza:#444;
    --laranja:#ff7b00;
    --claro:#f4f4f4;
}

body{
    margin:0;
    font-family:Arial, Helvetica, sans-serif;
    background:var(--claro);
    color:#222;
    transition:0.4s;
}

header{
    background:var(--verde);
    color:white;
    text-align:center;
    padding:20px;
}

nav ul{
    list-style:none;
    padding:0;
}

nav li{
    display:inline-block;
    margin:10px;
}

nav a{
    color:white;
    text-decoration:none;
    font-weight:bold;
}

section{
    padding:40px 20px;
}

.banner{
    text-align:center;
}

#simulador{
    background:#eaf7ef;
}

.painel-indicadores{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:15px;
    margin-top:20px;
}

.card{
    background:white;
    border-radius:10px;
    padding:20px;
    text-align:center;
    box-shadow:0 2px 8px rgba(0,0,0,0.1);
}

.card h4{
    color:var(--verde);
}

#sliderDesmatamento{
    width:100%;
}

#alerta{
    margin-top:20px;
    padding:15px;
    font-weight:bold;
    color:red;
}

footer{
    text-align:center;
    background:var(--cinza);
    color:white;
    padding:20px;
}

.acessibilidade{
    position:fixed;
    right:10px;
    top:10px;
    z-index:1000;
}

.acessibilidade button{
    display:block;
    margin-bottom:5px;
    padding:8px;
    cursor:pointer;
}

.alto-contraste{
    background:black;
    color:white;
}

.alto-contraste .card{
    background:#222;
    color:white;
}

@media(max-width:768px){

    nav li{
        display:block;
    }

}
