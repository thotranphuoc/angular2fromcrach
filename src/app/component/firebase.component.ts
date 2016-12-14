import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { IBusiness } from '../service/ibusiness';
import { ICategory } from '../service/icategory';

@Component({
    selector: 'app-firebase',
    templateUrl: 'firebase.component.html',

})
export class FirebaseComponent implements OnInit {
    items: any[];
    businesses: IBusiness[];
    categories: ICategory[];
    appState: string;
    activeKey: string;

    activeCompany: string;
    activeCategory: string;
    activeYears_in_business: number;
    activeDescription: string;
    activePhone: string;
    activeEmail: string;
    activeStreet_address: string;
    activeCity: string;
    activeState: string;
    activeZipcode: string;

    constructor(private _fbService: FirebaseService) {
        this._fbService.getItems().subscribe(
            // items => console.log(items)
            items => this.items = items
        )
    }

    ngOnInit() {
        this.getAllBusinesses();
        this.getAllCategories();
    }

    changeState(state: string, key: string) {
        console.log('State -->' + state);
        if (key) {
            this.activeKey = key;
            console.log('Key -->' + key);
        }
        this.appState = state;
    }

    filterCategory(value) {
        if (value != 0) {
            this._fbService.getBusinessesFilter(value).subscribe(
                businesses => this.businesses = businesses
            );
        } else {
            this.getAllBusinesses();
        }
    }

    getAllBusinesses() {
        this._fbService.getBusinesses().subscribe(
            // business => console.log(business)
            bussinesses => this.businesses = bussinesses
        );
    }

    getAllCategories() {
        this._fbService.getCategories().subscribe(
            // category => console.log(category)
            categories => this.categories = categories
        );
    }

    addBusiness(
        company: string,
        category: string,
        years_in_business: number,
        description: string,
        phone: string,
        email: string,
        street_address: string,
        city: string,
        state: string,
        zipcode: string
    ) {
        var created_at = new Date().toString();
        var newBusiness = {
            company: company,
            category: category,
            years_in_business: years_in_business,
            description: description,
            phone: phone,
            email: email,
            street_address: street_address,
            city: city,
            state: state,
            zipcode: zipcode
        }

        this._fbService.addBusiness(newBusiness);
        this.appState = 'default';
    }

    showEdit(business) {
        this.changeState('edit', business.$key);

        this.activeCompany = business.company;
        this.activeCategory = business.category;
        this.activeYears_in_business = business.years_in_business;
        this.activeDescription = business.description;
        this.activePhone = business.phone;
        this.activeEmail = business.email;
        this.activeStreet_address = business.street_address;
        this.activeCity = business.city;
        this.activeState = business.state;
        this.activeZipcode = business.zipcode;
    }

    updateBusiness(){
        var updBusiness = {
        company:            this.activeCompany,
        category:           this.activeCategory,
        years_in_business:  this.activeYears_in_business,
        description:        this.activeDescription,
        phone:              this.activePhone,
        email:              this.activeEmail,
        street_address:     this.activeStreet_address,
        city:               this.activeCity,
        state:              this.activeState,
        zipcode:            this.activeZipcode
        };

        this._fbService.updateBusiness(this.activeKey, updBusiness);
        this.appState = 'default';
    }

    deleteBusiniess(key){
        this._fbService.deleteBusiness(key);
        this.appState='default';
    }
}
