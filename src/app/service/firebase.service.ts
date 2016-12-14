import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { IBusiness } from './ibusiness';
import { ICategory } from './icategory';

@Injectable()

export class FirebaseService {
    businesses: FirebaseListObservable<IBusiness[]>;
    categories: FirebaseListObservable<ICategory[]>;
    constructor( private _af: AngularFire){

    }

    getItems(){
        return this._af.database.list('/items');
    }

    getBusinesses(){
        this.businesses = this._af.database.list('/businesses') as FirebaseListObservable<IBusiness[]>;
        return this.businesses;
    }

    getBusinessesFilter(category: string){
        this.businesses = this._af.database.list('/businesses', {
            query: {
                orderByChild: 'category',
                equalTo: category
            }
        }) as FirebaseListObservable<IBusiness[]>;
        return this.businesses;
    }

    getCategories(){
        this.categories = this._af.database.list('/categories') as FirebaseListObservable<ICategory[]>;
        return this.categories;
    }

    addBusiness(newBusiness){
        return this.businesses.push(newBusiness);
    }

    updateBusiness(key, updBusiness){
        return this.businesses.update(key, updBusiness);
    }

    deleteBusiness(key){
        return this.businesses.remove(key);
    }
}

