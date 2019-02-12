import {
  Component, OnInit,
  OnDestroy,
  ViewChild, ElementRef
} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('grid') canvasRef: ElementRef;

  ngOnInit() {

    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');
    let img1 = new Image(); // Image constructor
    img1.src = 'https://www.html5canvastutorials.com/demos/assets/yoda.jpg';
    ctx.drawImage(img1, 0, 0, 40, 40);
    ctx.drawImage(img1, 360, 0, 40, 40);
    ctx.drawImage(img1, 0, 360, 40, 40);
    ctx.drawImage(img1, 360, 360, 40, 40);
    let obj = {};

    var drawGrid = function (w, h, id) {
      ctx.canvas.width = w;
      ctx.canvas.height = h;

      let x;
      let y;

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
    var player1_y = [0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 1, 1, 1, 1, 1, 1, 1, 1,
      2, 2, 2, 2, 2, 2, 2, 2, 2,
      3, 3, 3, 3, 3, 3, 3, 3, 3,
      4, 4, 4, 4, 4, 4, 4, 4, 4,
      5, 5, 5, 5, 5, 5, 5, 5, 5,
      6, 6, 6, 6, 6, 6, 6, 6, 6,
      7, 7, 7, 7, 7, 7, 7, 7, 7,
      8, 8, 8, 8, 8, 8, 8, 8, 8,
      9, 9, 9, 9, 9, 9, 9, 9, 9
    ];
    var player1_x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    ];
    var player2_x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    ];
    var player2_y = [9, 9, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6,
      6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4,
      4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0
    ];
    let index = 0;
    for (let player1countr = 0; player1countr < 34; player1countr++) {
      let x_co;
      let y_co;
      index++;
      if (index % 2 == 0) {
        x_co = player1_x[player1countr];
        y_co = player1_y[player1countr];
        ctx.drawImage(img1, player1_x[player1countr] * 40, player1_y[player1countr] * 40, 40, 40);
        player1countr++;
      } else {
        x_co = player2_x[player1countr];
        y_co = player2_y[player1countr];
        ctx.drawImage(img1, player2_x[player1countr] * 40, player2_y[player1countr] * 40, 40, 40);
        player1countr++;
      }


      let str = "(" + y_co + "," + x_co + ")";
      obj[str] = {};
      obj[str]["player"] = index % 2;
      var data = {
        "type": "boardinfo",
        "info": obj
      }
      console.log(obj);
    }
  }
  title = 'game-app';

}
