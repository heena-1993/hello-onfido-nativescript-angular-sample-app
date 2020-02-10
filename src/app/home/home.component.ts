import { Observable } from 'tns-core-modules/data/observable';
import { Component } from "@angular/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent extends Observable {
    onfido = false;
    public onfidoSettings: any;

    constructor() { 
        super();
        
        this.onfidoSettings = {                                  
            token: "eyJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjoiTVNFMlhOdGpGZk02SWNnUGhaNlViVmZ4aXNLMlJ0eGJ6aVR4MlVha01TUmI4T3Q0VjA1MmRDS0RBTTFpXG5HdTdFSEdVbXJwdTlUREFVc1VXWHJXRGxVeHJMdGUzN3c2SkJJZ01VSkN1b2puazhPSVNXaGMwMGU4QkNcbk94d0FTdkpuXG4iLCJ1dWlkIjoiM2pISFJUZ1RCQVUiLCJleHAiOjE1ODA5OTAyODEsInVybHMiOnsib25maWRvX2FwaV91cmwiOiJodHRwczovL2FwaS5vbmZpZG8uY29tIiwidGVsZXBob255X3VybCI6Imh0dHBzOi8vdGVsZXBob255Lm9uZmlkby5jb20iLCJkZXRlY3RfZG9jdW1lbnRfdXJsIjoiaHR0cHM6Ly9zZGsub25maWRvLmNvbSIsInN5bmNfdXJsIjoiaHR0cHM6Ly9zeW5jLm9uZmlkby5jb20iLCJob3N0ZWRfc2RrX3VybCI6Imh0dHBzOi8vaWQub25maWRvLmNvbSJ9fQ.VEXH5Pi1FlAmLlNo2IAebeqqXyeIghhF0eUd6nojK78",
            welcome: true, 
            document: true,
            photo: true,
            responseHandler: (response: any) => {
                if (response.userCanceled) {
                    console.log('user cancelled', response.userCanceled);
                } else if (response.results) {
                    console.log('user results', response.results);
                } else if (response.error) {
                    console.log('user error', response.error);
                }
            }
        };
    }
}
