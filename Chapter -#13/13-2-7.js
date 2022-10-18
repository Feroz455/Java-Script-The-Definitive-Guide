function fetchSequentially(urls) {
    const bodies = [];
    function fetchOne(url) {
        return fetch(url)
            .then(response => response.text())
            .then(body => {
                bodies.push(body);
            });
    }
    let p = Promise.resolve(undefined);
    for (url of urls) {
        p = p.then(() => fetchOne(url));
    }
    return p.then(() => bodies);
}


function promiseSequence(inputs, promiseMaker) {
    inputs = [...inputs];
    function handleNextInput(ouputs) {
        if (inputs.length === 0) {
            return outputs;
        }
        else {
            let nextInput = inputs.shift();
            return promiseMaker(nextInput)
                .then(output => outputs.concat(output))
                .then(handleNextInput);
        }
    }
    return Promise.resolve([]).then(handleNextInput);
}

function fetchBody(url) {
    return fetch(url).then(r => r.next());
}
promiseSequence(urls, fetchBody)
    .then(bodies => {
    }).catch(console.error);