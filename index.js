
    var key, pos = 0;
    var img;
    var img1;
    var player1countr = 0;
    var player2counter = 0;
    window.onload = function () {
        var c = document.getElementById("grid");
        var ctx = c.getContext("2d");
        img = document.getElementById("scream");
        img1 = document.getElementById("scream1");
        ctx.drawImage(img, 0, 0, 40, 40);
        ctx.drawImage(img, 360, 0, 40, 40);
        ctx.drawImage(img1, 0, 360, 40, 40);
        ctx.drawImage(img1, 360, 360, 40, 40);

        var i = 0;
        var vals = [-40, 40, 0];

        while (i < 200) {
            var from = Math.floor(Math.random() * vals.length);
            var to = Math.floor(Math.random() * vals.length);
            console.log(from, to);
            move(vals[from], vals[to], i);

            i++;
        }
        console.log("%j", obj)
        // myGamePiece = new component(35, 35, "red", 0, 0);
        // myGamePiece = new component(35, 35, "red", 360, 0);

        // myGamePiece = new component(35, 35, "blue", 0, 360);
        // myGamePiece = new component(35, 35, "blue", 360, 360);
    }
   


    var myGamePiece;
    var canvas = document.getElementById("grid");
    var ctx = canvas.getContext('2d');
    var obj = {};

    var drawGrid = function (w, h, id) {

        ctx.canvas.width = w;
        ctx.canvas.height = h;


        for (x = 0; x <= w; x += 40) {
            for (y = 0; y <= h; y += 40) {
                if (x < 400 && y < 400) {
                    let x_co = x / 40;
                    let y_co = y / 40;
                    let str = "(" + x_co + "," + y_co + ")";
                    obj[str] = {};
                    obj[str]["player"] = "";
                }

                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }
        }
        x = 360;
        y = 360;
        //console.log("%j",obj)
    };


    drawGrid(400, 400, "grid");

    function component(width, height, color, x, y) {

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        // ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);





    }

    function printBoardInfo(x, y, playerinfo) {
        let x_co = x / 40;
        let y_co = y / 40;
        let str = "(" + x_co + "," + y_co + ")";
        obj[str]["player"] = playerinfo
        // console.log(obj[str]["player"]);
        // console.log(obj)

        let boardarray = [];
        Object.keys(obj).forEach(ob => {
            boardarray.push(obj[ob]["player"] == "0" ? "0" : "1");
        })
        //console.log(boardarray);
    }
    //move("(0,9)",[0,8])


    function move(from, to, index) {
        // printBoardInfo(x,y,color);
        //console.log(x,y);
       
        let x_co;
        let y_co;

        if (index % 2 == 0) {
            x_co = player1_x[player1countr];
            y_co = player1_y[player1countr];
            ctx.drawImage(img1, player1_x[player1countr] * 40, player1_y[player1countr] * 40, 40, 40);
            player1countr++;
        } else {
            x_co = player2_x[player2counter];
            y_co = player2_y[player2counter];
            ctx.drawImage(img, player2_x[player2counter] * 40, player2_y[player2counter] * 40, 40, 40);
            player2counter++;
        }


        let str = "(" + y_co + "," + x_co + ")";
        obj[str] = {};
        obj[str]["player"] = index % 2;

    }
