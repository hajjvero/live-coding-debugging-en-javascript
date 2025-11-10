// ==========================================
//         Les types d'erreurs
// ==========================================

// ========== Les erreurs natives ===========

// 1. Type d'erreur : SyntaxError (Erreur de syntaxe dans le code)
// const i = ;

//  2. Type d'erreur : ReferenceError (ReferenceError)
// console.log(y);

// 3. Type d'erreur : TypeError (Type inattendu null ou undefined)
// const arr = null;
//
// console.log(arr.map((item) => item))

// 4. Type d'erreur : RangeError (Valeur hors limites)
// const arr = new Array(-1);

// ========== Les erreurs contextuelles ===========

// 1. Erreurs liées au DOM (Problèmes lors de la manipulation des éléments HTML)
// const btn = document.getElementById("btn-ddd");
// btn.addEventListener('click', () => {
//     console.log("youcode");
// })

// 2. Erreurs d'asynchronisme (Problèmes avec les promesses et async/await)


// 3. Erreurs d'environnement (Différences entre navigateur et Node.js)



// ==========================================
//         Les outils de debugging
// ==========================================

// 1. console.log()


// 2. console.error()


// 3. console.table()


// 4. console.trace()


// 5. console.warn()


// 6. console.info()


// 7. console.assert(c,m)


// 8. console.clear()


// ==========================================
//                  DevTools
// ==========================================

// example with validation et try catch.

function fn1() {
    debugger;
    const x = 3;
    fn2(x);
}

function fn2(y) {
    let m = y * 2;
    fn3();
}

function fn3() {
    console.error("youcde");

    console.log("hello");
}

fn1();