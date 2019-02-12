var express = require('express')
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var obj =
{
   "(0,0)": { player: 0 },
   "(0,1)": { player: 0 },
   "(0,2)": { player: 0 },
   "(0,3)": { player: 0 },
   "(0,4)": { player: 0 },
   "(0,5)": { player: 0 },
   "(0,6)": { player: 0 },
   "(0,7)": { player: 0 },
   "(0,8)": { player: 0 },
   "(0,9)": { player: "" },
   "(1,0)": { player: 0 },
   "(1,1)": { player: 0 },
   "(1,2)": { player: 0 },
   "(1,3)": { player: 0 },
   "(1,4)": { player: 0 },
   "(1,5)": { player: 0 },
   "(1,6)": { player: 0 },
   "(1,7)": { player: 0 },
   "(1,8)": { player: "" },
   "(1,9)": { player: 0 },
   "(2,0)": { player: "" },
   "(2,1)": { player: "" },
   "(2,2)": { player: "" },
   "(2,3)": { player: "" },
   "(2,4)": { player: "" },
   "(2,5)": { player: "" },
   "(2,6)": { player: "" },
   "(2,7)": { player: "" },
   "(2,8)": { player: 0 },
   "(2,9)": { player: 0 },
   "(3,0)": { player: "" },
   "(3,1)": { player: "" },
   "(3,2)": { player: "" },
   "(3,3)": { player: "" },
   "(3,4)": { player: "" },
   "(3,5)": { player: "" },
   "(3,6)": { player: "" },
   "(3,7)": { player: "" },
   "(3,8)": { player: "" },
   "(3,9)": { player: "" },
   "(4,0)": { player: "" },
   "(4,1)": { player: "" },
   "(4,2)": { player: "" },
   "(4,3)": { player: "" },
   "(4,4)": { player: "" },
   "(4,5)": { player: "" },
   "(4,6)": { player: "" },
   "(4,7)": { player: "" },
   "(4,8)": { player: "" },
   "(4,9)": { player: "" },
   "(5,0)": { player: "" },
   "(5,1)": { player: "" },
   "(5,2)": { player: "" },
   "(5,3)": { player: "" },
   "(5,4)": { player: "" },
   "(5,5)": { player: "" },
   "(5,6)": { player: "" },
   "(5,7)": { player: "" },
   "(5,8)": { player: "" },
   "(5,9)": { player: "" },
   "(6,0)": { player: "" },
   "(6,1)": { player: "" },
   "(6,2)": { player: "" },
   "(6,3)": { player: "" },
   "(6,4)": { player: "" },
   "(6,5)": { player: "" },
   "(6,6)": { player: "" },
   "(6,7)": { player: "" },
   "(6,8)": { player: "" },
   "(6,9)": { player: "" },
   "(7,0)": { player: "" },
   "(7,1)": { player: "" },
   "(7,2)": { player: "" },
   "(7,3)": { player: "" },
   "(7,4)": { player: "" },
   "(7,5)": { player: "" },
   "(7,6)": { player: "" },
   "(7,7)": { player: "" },
   "(7,8)": { player: 1 },
   "(7,9)": { player: 1 },
   "(8,0)": { player: 1 },
   "(8,1)": { player: 1 },
   "(8,2)": { player: 1 },
   "(8,3)": { player: 1 },
   "(8,4)": { player: 1 },
   "(8,5)": { player: 1 },
   "(8,6)": { player: 1 },
   "(8,7)": { player: 1 },
   "(8,8)": { player: "" },
   "(8,9)": { player: 1 },
   "(9,0)": { player: 1 },
   "(9,1)": { player: 1 },
   "(9,2)": { player: 1 },
   "(9,3)": { player: 1 },
   "(9,4)": { player: 1 },
   "(9,5)": { player: 1 },
   "(9,6)": { player: 1 },
   "(9,7)": { player: 1 },
   "(9,8)": { player: 1 },
   "(9,9)": { player: "" }

};
var otpsent;
app.use(express.static(__dirname + ''));

app.get("/", function (req, res, next) {
   res.sendFile(__dirname + "index.html");
});
io.on('connection', function (socket) {
   console.log('A user connected');
   otpsent = Math.random() * 1000;
   socket.emit("otp", otpsent);
   //Send a message after a timeout of 4seconds
   setTimeout(function () {
      socket.send('Sent a message 4seconds after connection!');
   }, 4000);

   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });

   socket.on('authentication', function (dataFromClient) {
      console.log('otp received' + dataFromClient.onetimepassword);
      if (otpsent == dataFromClient.onetimepassword) {
         console.log('otp verified');
         var data={
            "index":0,
            "board":obj
         }
         socket.emit("intialize",data );
      }

   });

   socket.on("boardinfo", function (inf) {
      console.log("%j", inf);
      var i=1;
      var data={
         "index":i++,
         "board":obj
      }
      socket.emit("continueGame",data );
   });


  
});

http.listen(3000, function () {
   console.log('listening on *:3000');
});


