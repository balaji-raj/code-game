import * as io from 'socket.io-client';
import { Observable, of } from 'rxjs';
import { OnInit, EventEmitter, Output } from '@angular/core';

export class BoardService implements OnInit {
    private url = 'http://localhost:3000';
    private socket;
    @Output() sendOtp = new EventEmitter();

    ngOnInit() {
        this.socket = io(this.url);
        this.socket.on('otp', data => {
            console.log("otp received" + data)
            this.socket.emit('authentication', { "onetimepassword": data }, function (err, response) {
                console.log(response, err)
                if (err) throw err;

                console.log(response)
            });

        })
        this.socket.on('initialize', data => {
            console.log("object received")
            

        })
    }
    public getMessages = () => {
        console.log("connecting to server");

        // this.socket = io(this.url);
        console.log("inside get messages")
        return Observable.create((observer) => {
            this.socket.on('otp', function (otp) {
                this.socket.emit('authentication', { "onetimepassword": otp }, function (err, response) {
                    console.log(response, err)
                    if (err) throw err;

                    console.log(response)
                });

            })
        });
    }


}