    const dogs = [
        { name: 'Snickers', age: 2 },
        { name: 'hugo', age: 8 }
     ];

     const me = 'coder'

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }


    // Regular
    console.log('hello');

    // Interpolated
    //console.log('Hello, I am a %s string', 'nasty');

    console.log(`Hello, I am a ${me}`)
    
    // Styled
    
    console.log('%c Big Text', 'font-size: 50px');
    
    // warning!
    
    console.warn('OHHH NOOO');
    
    // Error :|
    
    console.error('error, error try again');
    
    // Info
    
    console.info('no info for you!');
    
    // Testing
    const p = document.querySelector('p');

    console.assert(1 === 2, 'Wrong stupid!');
    console.assert(p.classList.contains('ouch'), 'that is incorrect dummy');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);


    // Grouping together

    dogs.forEach(dog => {
        console.group(`${dog.name}`)
        // or consoleCollapsed(`${dog.name}`)
        console.info(`${dog.name} is ${dog.age} human years, ${dog.age * 7} dog years`)
        console.groupEnd(`${dog.name}`)
    });

    // counting
    
    console.count('Duck Season')
    console.count('Rabit Season')
    console.count('Duck Season')
    console.count('Rabit Season')
    console.count('Duck Season')
    console.count('Rabit Season')
    console.count('Duck Season')
    console.count('Rabit Season')

    // timing
    console.time('Fetchtime')
    fetch('http://api.github.com/users/emilj858')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('Fetchtime');
            console.log(data);
        });

        console.table(dogs);

       
        
