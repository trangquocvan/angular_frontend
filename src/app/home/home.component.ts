import { Component,OnInit,ViewChild } from "@angular/core";
import { HomeService } from "../services/home.services";
import { Product } from '../model';

declare var $: any;
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    products: Product[];
    constructor(private HomeService:HomeService){
    }
    ngOnInit(){
        $('.owl-carousel').owlCarousel({
            nav:false,
            stagePadding: 0,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })
        this.HomeService.getAll().subscribe(res=>{
            this.products = res;
        },error=>{
            console.log(error)
        })
    }
    left(){
        var owl = $('.owl-carousel');
        owl.trigger('prev.owl.carousel', [300]);
    }
    right(){
        var owl = $('.owl-carousel');
        owl.trigger('next.owl.carousel', [300]);
    }
}