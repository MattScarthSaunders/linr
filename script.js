const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let angleSlider = document.getElementById("angleRange");
let branchesSlider = document.getElementById("branches");


let inputAngle = 15;
let branches = 10;

angleSlider.oninput = function () {
    this.nextElementSibling.value = this.value;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    inputAngle = Number(angleSlider.value);
    draw(canvas.width/2, canvas.height/1.5, 120, 0 , 6);
}

branchesSlider.oninput = function () {
    this.nextElementSibling.value = this.value;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    branches = Number(branchesSlider.value);
    draw(canvas.width/2, canvas.height/1.5, 120, 0 , 6);
}

function draw(startX, startY, length, angle, weight) {
    
    ctx.strokeStyle = 'olive'
    ctx.lineWidth = weight;

    if (weight < 2) ctx.strokeStyle = 'greenyellow';
    if (weight < 3) ctx.strokeStyle = 'forestgreen';
    
    ctx.beginPath();
    ctx.save();

    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0,0);
    ctx.lineTo(0, -length);
    ctx.stroke();

    if (length < branches) {
        ctx.restore();
        return;
    }

    draw(0, -length, length*0.8, angle-inputAngle, weight*0.8);
    draw(0, -length, length*0.8, angle+inputAngle, weight*0.8);

    ctx.restore();
    
}


draw(canvas.width/2, canvas.height/1.5, 120, 0 , 6);