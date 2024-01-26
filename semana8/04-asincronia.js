//sincrono - que se va a ejecutar en orden
//Juan le dice a Pool un ceviche
//Juan lo llamada y le dice para juntarse
//Pool lo deja esperando mientras conversa, revisa su agenda
//Juan esta esperando ⌚
//Pool ya pregunto ya resolvio
//Si sale el sabado

//asincrono - no se ejecuta en el orden si no no en el tiempo que se tenga que dar
//Marbella, Mariana vamos a conversar y tomar un café
//Mariana, amiga no se, tengo que hacer unas compras dejame coordinar y te paso la voz
//Marbella, ok me avisas y c/u se va a hacer sus cosas
//Mariana, Puedo el viernes en la tarde sale? <- respuesta
//Marbella, si confirmo || no mejor otro día

//JS es sincrono y tiene un solo hilo de ejecución, solo puede hacer una cosa a la vez

console.log("1. Mariana vamos a conversar y tomar un café");
console.log("2. amiga no se, tengo que hacer unas compras dejame coordinar y te paso la voz")

//setTimeout(funcion, tiempoEnMS) va a ejecutar la función en ese tiempo
setTimeout(() => {
    console.log("3. Mariana esta coordinando")
}, 3000)

console.log("4. que fue amiga?")