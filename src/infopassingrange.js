let indexRange = [];

document.getElementById('submitbuttonforindex').addEventListener('click', function() {
    let beginningIndex = parseInt(document.getElementById('beginningIndex').value, 10);
    let endIndex = parseInt(document.getElementById('endIndex').value, 10);

    if (isNaN(beginningIndex) || isNaN(endIndex) || beginningIndex < 0 || endIndex < beginningIndex) {
        alert('Invalid index range');
        return;
    }

    indexRange = [beginningIndex, endIndex];

    console.log(indexRange);

    const dataToSend = { indexRange: indexRange };
    console.log('Data being sent:', dataToSend);

    fetch('https://vercel.com/ufuks-projects-c6a815ff/apiii/5oP2Aoc6yiLN31s2i8eEHsboMLX7/api/indexesforinformationpass', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('changebuttonforindex').addEventListener('click', function() {
    let beginningIndex = parseInt(document.getElementById('beginningIndex').value, 10);
    let endIndex = parseInt(document.getElementById('endIndex').value, 10);

    if (isNaN(beginningIndex) || isNaN(endIndex) || beginningIndex < 0 || endIndex < beginningIndex) {
        alert('Invalid index range');
        return;
    }

    indexRange = [beginningIndex, endIndex];

    console.log(indexRange);

    const dataToSend = { indexRange: indexRange };
    console.log('Data being sent:', dataToSend);

    fetch('https://vercel.com/ufuks-projects-c6a815ff/apiii/5oP2Aoc6yiLN31s2i8eEHsboMLX7/api/updateindexesforinformationpass', {
        method: 'PUT', // Use PUT method for updating
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});